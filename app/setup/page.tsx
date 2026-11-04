import { CodeBlock } from "@/components/code-block";

const steps = [
  {
    title: "Use an Expo project with the @/ alias",
    body: "New Expo projects from create-expo-app already map @/ to your project root. Check that tsconfig.json has this.",
    file: "tsconfig.json",
    code: `{
  "compilerOptions": {
    "paths": { "@/*": ["./*"] }
  }
}`,
  },
  {
    title: "Add components.json",
    body: "The shadcn CLI reads this file to know where to put components. Create it in the root of your Expo project.",
    file: "components.json",
    code: `{
  "$schema": "https://ui.shadcn.com/schema/components.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "",
    "baseColor": "neutral",
    "cssVariables": false
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "utils": "@/lib/utils"
  }
}`,
  },
  {
    title: "Add a component",
    body: "Pick any component from the list and run its install command. The file lands in components/ui.",
    file: "Terminal",
    code: `npx shadcn@latest add https://your-domain.com/r/button.json`,
  },
  {
    title: "Use it",
    body: "Import the component and use it. Change its look by editing the StyleSheet at the bottom of the file.",
    file: "app/index.tsx",
    code: `import { Button } from "@/components/ui/button";

export default function Home() {
  return <Button label="Get started" onPress={() => {}} />;
}`,
  },
];

export default function SetupPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-12">
      <h1 className="text-5xl font-semibold tracking-tight">Set up your Expo app</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
        These components use React Native&rsquo;s built-in StyleSheet. There is nothing to
        install and no styling library to configure.
      </p>

      <ol className="mt-12 space-y-12">
        {steps.map((s, i) => (
          <li key={s.title} className="grid gap-4 sm:grid-cols-[40px_1fr]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-1 text-muted">{s.body}</p>
              <div className="mt-4">
                <CodeBlock code={s.code} title={s.file} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
