'use client'
import { useState, useContext } from "react"
import Input from "../Input/input"
import SendButton from '../Buttons/SendButton/sendButton'
import MessageSucess from "../MessageSucess/messageSucess"
import { GastosContext } from "@/context/GastosContext"
import Select from "@/components/select/Select"

export default function Form() {
    const { dados, categoriasArray } = useContext(GastosContext)
    const [sucess, setSucess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSucess(true)
        setTimeout(() => { setSucess(false) }, 5000)
    }

    return (
        <>
            <div className="w-11/12 bg-slate-50 shadow-md h-[80%] rounded-3xl max-w-lg flex flex-col justify-center items-center " >
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4 w-4/5 max-w-lg">
                    <div className="flex justify-between gap-2">
                        <Select
                            callback={() => {
                                return dados.map((e) => {
                                    return (
                                        <option className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1">{e.grupo}</option>
                                    )
                                })
                            }}
                            valueSelect={"grupo"}
                            label={"Selecione um grupo"}
                        />

                    </div>
                    <Input placeholder='Descrição' type="text" />
                    <Input placeholder='Valor' type="number" />
                    <div className="flex justify-between gap-2">
                        <Select
                            callback={() => {
                                return categoriasArray.map((categoria, index) => (
                                    <option key={index} className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1">{categoria}</option>
                                ))
                            }}
                            valueSelect={"Categoria"}
                            label={"Selecione uma categoria"}
                        />

                        <input type="color"  value="#ffffff" className="rounded-md w-14 h-10 bg-inherit border-zinc-400 border-2 " />
                    </div>

                    <Select
                        callback={() => {
                            return (
                                <>
                                    <option value="Débito">Débito</option>
                                    <option value="Crédito">Crédito</option>
                                </>
                            )
                        }}
                        valueSelect={"metódo"}
                        label={"Selecione o método de pagamento"}
                    />

                    <SendButton />
                </form >
            </div>
            {sucess && <MessageSucess />}
        </>
    )
}