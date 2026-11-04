import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import registryData from '@/registry.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ component: string }> }
) {
  const { component: rawComponent } = await params;
  
  // Remove .json extension if present
  const component = rawComponent.replace(/\.json$/, '');

  // Find the component in the registry
  const item = registryData.items.find((item) => item.name === component);

  if (!item) {
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }

  // Read the actual file content from the registry folder
  const filesWithContent = await Promise.all(
    item.files.map(async (file) => {
      try {
        // Static path scoped to registry folder
        const relativePath = file.path.startsWith('registry/') 
          ? file.path.substring(9) // Remove 'registry/' prefix
          : file.path;
        const filePath = join(process.cwd(), 'registry', relativePath);
        const content = await readFile(filePath, 'utf-8');
        return {
          path: file.target,
          type: file.type,
          content,
          target: file.target,
        };
      } catch (error) {
        console.error(`Error reading file ${file.path}:`, error);
        return {
          path: file.target,
          type: file.type,
          content: '',
          target: file.target,
        };
      }
    })
  );

  // Return the component definition in shadcn registry format
  const response = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: item.type,
    ...(item.title && { title: item.title }),
    ...(item.description && { description: item.description }),
    registryDependencies: (item as any).registryDependencies || [],
    dependencies: (item as any).dependencies || [],
    devDependencies: (item as any).devDependencies || [],
    files: filesWithContent,
    ...(item as any).tailwind && { tailwind: (item as any).tailwind },
    ...(item as any).cssVars && { cssVars: (item as any).cssVars },
  };

  return NextResponse.json(response, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
