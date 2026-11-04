import Link from "next/link";
import { notFound } from "next/navigation";
import { components, SITE_URL } from "@/lib/registry-items";

export function generateStaticParams() {
  return components.map((c) => ({ name: c.name }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const c = components.find((item) => item.name === name);
  if (!c) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        Back to all components
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">{c.title}</h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{c.description}</p>

      <h2 className="mt-10 text-xl font-semibold">Install</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-100 p-4 text-sm dark:bg-neutral-900">
        npx shadcn@latest add {SITE_URL}/r/{c.name}.json
      </pre>

      <h2 className="mt-10 text-xl font-semibold">Usage</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-100 p-4 text-sm dark:bg-neutral-900">
        {c.usage}
      </pre>
    </main>
  );
}
