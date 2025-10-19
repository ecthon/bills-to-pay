import { CardBill } from "@/components/card-bill";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen max-sm:px-4">
      <div className="flex w-full items-center justify-between mb-4">
        <div className="flex items-baseline">
          <h1 className="font-bold text-lg">Dezembro</h1>
          <h1 className="font-normal text-zinc-400">/2025</h1>
        </div>
        <p className="text-[12px] px-2 text-zinc-400">3/5</p>
      </div>
      <div className="flex flex-col w-full space-y-0.5">
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
      </div>
    </main >
  );
}
