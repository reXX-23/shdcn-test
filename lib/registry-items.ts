// Edit this file when you add a new component to registry.json.
// Set NEXT_PUBLIC_SITE_URL to your real domain after deploying.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
      "A pressable button with default and outline variants, three sizes and a disabled state.",
    dependencies: [],
    usage: `import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <>
      <Button label="Get started" onPress={() => {}} />
      <Button label="Cancel" variant="outline" size="sm" />
      <Button label="Saving..." disabled />
    </>
  );
}`,
    props: [
      { name: "label", type: "string", description: "Text shown inside the button." },
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style." },
      { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Height and padding." },
      { name: "disabled", type: "boolean", default: "false", description: "Dims the button and blocks presses." },
      { name: "style", type: "StyleProp<ViewStyle>", description: "Extra styles, applied after the defaults." },
      { name: "...props", type: "PressableProps", description: "Everything else goes to Pressable, such as onPress." },
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
      <Input label="Password" secureTextEntry error="Use at least 8 characters" />
    </>
  );
}`,
    props: [
      { name: "label", type: "string", description: "Text shown above the field." },
      { name: "error", type: "string", description: "Shows a red border and this message below the field." },
      { name: "containerStyle", type: "StyleProp<ViewStyle>", description: "Styles for the wrapper around label, field and error." },
      { name: "style", type: "StyleProp<TextStyle>", description: "Styles for the text field itself." },
      { name: "...props", type: "TextInputProps", description: "Everything else goes to TextInput, such as value and onChangeText." },
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
      { name: "style", type: "StyleProp<ViewStyle | TextStyle>", description: "Extra styles, applied after the defaults." },
      { name: "...props", type: "ViewProps | TextProps", description: "Card and CardContent take View props. CardTitle and CardDescription take Text props." },
    ],
  },
];
