import Counter from "@/components/Counter";
import CounterDisplay from "@/components/CounterDisplay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 p-24">
      <CounterDisplay />
      <Counter />
    </main>
  );
}
