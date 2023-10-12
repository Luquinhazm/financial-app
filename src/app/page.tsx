import Modal from "@/components/Modal/modal"
import Painel from "@/components/Painel/painel"
import CardResult from "@/components/Cards/CardResult/cardResult"
import Form from "@/components/Form/form"


function ComponentQualquer(){
  return <h1>Sou um componente teste</h1>
}

export default function Home() {
 const formAdicionar = <Form />
const teste = <ComponentQualquer/>

  return (
    <div className="relative flex flex-col items-center">
      <main className="flex min-h-[100svh] gap-4  px-4 w-full">
        <Painel></Painel>
        <div className="flex-1 flex flex-col gap-3  py-3 min-h-screen">
          <CardResult />
          <div className="  rounded-md shadow flex-auto"></div>
        </div>
      </main>

      <Modal component={formAdicionar} postion={"fixed bottom-10 right-10"}/>
      <Modal component={teste} postion={"bottom-10 right-10"}/>
    </div>
  )
}
