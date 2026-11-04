import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code-block";
import { Preview } from "@/components/previews";
import { components, installCommand } from "@/lib/registry-items";

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
    <main className="mx-auto max-w-3xl px-6 pt-12">
      <Link href="/#components" className="text-sm text-muted hover:text-ink">
        All components
      </Link>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight">{c.title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{c.description}</p>

      <div className="mt-10 flex min-h-56 items-center justify-center rounded-2xl bg-surface p-8 ring-1 ring-line">
        <Preview name={c.name} />
      </div>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight">Install</h2>
      <div className="mt-4">
        <CodeBlock code={installCommand(c.name)} title="Terminal" />
      </div>
      <p className="mt-3 text-sm text-muted">
        This adds <code className="font-mono text-ink">components/ui/{c.name}.tsx</code> to
        your Expo app. See the{" "}
        <Link href="/setup" className="text-accent underline underline-offset-4">
          setup guide
        </Link>{" "}
        for the one-time project setup.
      </p>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight">Usage</h2>
      <div className="mt-4">
        <CodeBlock code={c.usage} title="app/index.tsx" />
      </div>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight">Props</h2>
      <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-line">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-surface text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Prop</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Default</th>
              <th className="px-4 py-3 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {c.props.map((p) => (
              <tr key={p.name} className="border-t border-line align-top">
                <td className="px-4 py-3 font-mono text-[13px]">{p.name}</td>
                <td className="px-4 py-3 font-mono text-[13px] text-muted">{p.type}</td>
                <td className="px-4 py-3 font-mono text-[13px] text-muted">{p.default ?? ""}</td>
                <td className="px-4 py-3 text-muted">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight">Dependencies</h2>
      {c.dependencies.length === 0 ? (
        <p className="mt-4 text-muted">
          None. This component only uses <code className="font-mono text-ink">react-native</code>.
        </p>
      ) : (
        <ul className="mt-4 flex flex-wrap gap-2">
          {c.dependencies.map((d) => (
            <li key={d} className="rounded-md bg-surface px-3 py-1.5 font-mono text-[13px] ring-1 ring-line">
              {d}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
