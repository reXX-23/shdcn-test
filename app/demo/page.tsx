import { Button } from "@/registry/web/components/button/button";
import { Input } from "@/registry/web/components/input/input";
import { Card, CardTitle, CardDescription, CardContent } from "@/registry/web/components/card/card";

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Component Demo</h1>
      
      <div className="space-y-12">
        {/* Button Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Button</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </section>

        {/* Input Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Input</h2>
          <div className="space-y-4 max-w-md">
            <Input label="Email" placeholder="you@example.com" type="email" />
            <Input label="Password" placeholder="••••••••" type="password" />
            <Input label="With Error" error="This field is required" />
            <Input placeholder="No label" />
          </div>
        </section>

        {/* Card Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Install components directly from this registry
              </CardDescription>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Use the npx command to add any component to your project.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>
                Styled with utility classes
              </CardDescription>
              <CardContent>
                <p className="text-sm text-gray-700">
                  All components use Tailwind CSS v4 for styling.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
