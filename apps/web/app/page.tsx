import { Button } from "@repo/ui";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Button variant={"default"} size={"sm"}>
        hello
      </Button>
    </main>
  );
}
