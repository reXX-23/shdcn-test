// Edit this file when you add a new component to registry.json
// Set NEXT_PUBLIC_SITE_URL to your real domain after deploying.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export type ComponentDoc = {
  name: string;
  title: string;
  description: string;
  usage: string;
};

export const components: ComponentDoc[] = [
  {
    name: "button",
    title: "Button",
    description: "A pressable button with default and outline variants and three sizes.",
    usage: `import { Button } from "@/components/ui/button";

<Button label="Get Started" onPress={() => {}} />
<Button label="Cancel" variant="outline" size="sm" />`,
  },
  {
    name: "input",
    title: "Input",
    description: "A text input with an optional label and error message.",
    usage: `import { Input } from "@/components/ui/input";

<Input label="Email" placeholder="you@example.com" />
<Input label="Password" error="Password is too short" secureTextEntry />`,
  },
  {
    name: "card",
    title: "Card",
    description: "A rounded container with title, description and content parts.",
    usage: `import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card>
  <CardTitle>Welcome</CardTitle>
  <CardDescription>Your account is ready.</CardDescription>
  <CardContent>{/* anything */}</CardContent>
</Card>`,
  },
];
