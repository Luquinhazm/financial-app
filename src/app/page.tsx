import Modal from "@/components/Modal/modal"
import Painel from "@/components/Painel/painel"
export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <main className="flex min-h-[100svh] h-full flex-col gap-4 px-8 w-full">
          <Painel></Painel>
          <Painel></Painel>
      </main>
      <Modal />
    </div>
  )
}
