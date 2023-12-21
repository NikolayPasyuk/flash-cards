import { Button } from "@/ components/ui/button";

const linkHref = "https://google.com";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button>Primary Button</Button>
      <Button as={"a"} href={linkHref}>
        Primary Button
      </Button>
    </div>
  );
}
