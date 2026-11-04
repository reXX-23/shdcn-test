// Edit this file when you add a new component to registry.json.
// Set NEXT_PUBLIC_SITE_URL to your real domain after deploying.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shdcn-test-p9kj.vercel.app";

export type Prop = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export type ComponentDoc = {
  name: string;
  title: string;
  description: string;
  dependencies: string[];
  usage: string;
  props: Prop[];
};

export const installCommand = (name: string) =>
  `npx shadcn@latest add ${SITE_URL}/r/${name}.json`;

export const components: ComponentDoc[] = [
  {
    name: "button",
    title: "Button",
    description:
      "A clickable button with default and outline variants, three sizes and a disabled state.",
    dependencies: [],
    usage: `import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <>
      <Button onClick={() => {}}>Get started</Button>
      <Button variant="outline" size="sm">Cancel</Button>
      <Button disabled>Saving...</Button>
    </>
  );
}`,
    props: [
      { name: "children", type: "React.ReactNode", description: "Content shown inside the button." },
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style." },
      { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Height and padding." },
      { name: "disabled", type: "boolean", default: "false", description: "Dims the button and blocks clicks." },
      { name: "className", type: "string", description: "Additional CSS classes." },
      { name: "...props", type: "ButtonHTMLAttributes", description: "Standard HTML button props like onClick." },
    ],
  },
  {
    name: "input",
    title: "Input",
    description:
      "A text input with an optional label above it and an error message below it.",
    dependencies: [],
    usage: `import { Input } from "@/components/ui/input";

export default function Example() {
  return (
    <>
      <Input label="Email" placeholder="you@example.com" />
      <Input label="Password" type="password" error="Use at least 8 characters" />
    </>
  );
}`,
    props: [
      { name: "label", type: "string", description: "Text shown above the field." },
      { name: "error", type: "string", description: "Shows a red border and this message below the field." },
      { name: "containerClassName", type: "string", description: "CSS classes for the wrapper around label, field and error." },
      { name: "className", type: "string", description: "CSS classes for the input field itself." },
      { name: "...props", type: "InputHTMLAttributes", description: "Standard HTML input props like value and onChange." },
    ],
  },
  {
    name: "card",
    title: "Card",
    description:
      "A rounded container with title, description and content parts for grouping related information.",
    dependencies: [],
    usage: `import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Example() {
  return (
    <Card>
      <CardTitle>Welcome back</CardTitle>
      <CardDescription>Sign in to continue.</CardDescription>
      <CardContent>{/* any content */}</CardContent>
    </Card>
  );
}`,
    props: [
      { name: "className", type: "string", description: "Additional CSS classes." },
      { name: "...props", type: "HTMLAttributes", description: "Card and CardContent take div props. CardTitle takes h3 props. CardDescription takes p props." },
    ],
  },
];
