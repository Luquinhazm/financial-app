import Modal from "@/components/Modal/modal"

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <main className="flex flex-col gap-4 items-center w-full h-[200vh]">
        <h1>Olá mundo</h1>
        <div className="h-1/3 bg-amber-200 w-1/2 ">Box 2</div>
        <div className="h-1/3 bg-amber-200 w-1/2 ">Box 1</div>
        <div className="h-1/3 bg-amber-200 w-1/2 ">Box 3</div>
        <div className="h-1/3 bg-amber-200 w-1/2 ">Box 4</div>
      </main>
      <Modal />
    </div>

  )
}
