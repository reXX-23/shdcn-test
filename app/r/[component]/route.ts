import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import registryData from '@/registry.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ component: string }> }
) {
  const { component } = await params;

  // Find the component in the registry
  const item = registryData.items.find((item) => item.name === component);

  if (!item) {
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }

  // Read the actual file content
  const filesWithContent = await Promise.all(
    item.files.map(async (file) => {
      try {
        const filePath = join(process.cwd(), file.path);
        const content = await readFile(filePath, 'utf-8');
        return {
          type: file.type,
          content,
          target: file.target,
        };
      } catch (error) {
        console.error(`Error reading file ${file.path}:`, error);
        return {
          type: file.type,
          content: '',
          target: file.target,
        };
      }
    })
  );

  // Return the component definition in shadcn registry format
  const response = {
    name: item.name,
    type: item.type,
    registryDependencies: [],
    files: filesWithContent,
    tailwind: {
      config: {},
    },
  };

  return NextResponse.json(response, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
