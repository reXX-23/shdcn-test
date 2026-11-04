import Link from "next/link";
import { components, SITE_URL } from "@/lib/registry-items";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">My Mobile UI</h1>
      <p className="mt-3 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
        React Native components for Expo. Copy them into your app with one command.
      </p>

      <ul className="mt-10 divide-y divide-neutral-200 dark:divide-neutral-800">
        {components.map((c) => (
          <li key={c.name} className="py-5">
            <Link href={`/components/${c.name}`} className="text-xl font-semibold hover:underline">
              {c.title}
            </Link>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">{c.description}</p>
            <code className="mt-3 block overflow-x-auto rounded-lg bg-neutral-100 p-3 text-sm dark:bg-neutral-900">
              npx shadcn@latest add {SITE_URL}/r/{c.name}.json
            </code>
          </li>
        ))}
      </ul>
    </main>
  );
}
