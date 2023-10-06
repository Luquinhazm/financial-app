import AddButton from "@/components/Buttons/AddButton/addButton"
import Form from "@/components/Form/form"

export default function Home() {
  return (
   <main className="flex flex-col justify-around items-center h-screen">
      <Form/>
      <AddButton/>
   </main>
  )
}
