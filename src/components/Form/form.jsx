'use client'
import { useState, useContext } from "react"
import Input from "../Input/input"
import SendButton from '../Buttons/SendButton/sendButton'
import MessageSucess from "../MessageSucess/messageSucess"
import { GastosContext } from "@/context/GastosContext"

export default function Form() {
    const Dados = useContext(GastosContext)
    const [sucess, setSucess] = useState(false)
    const categoriasUnicas = new Set();
    Dados.forEach((e) => {
        e.despesas.forEach((d) => {
            categoriasUnicas.add(d.categoria);
        });
    });
    const categoriasArray = Array.from(categoriasUnicas);

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
                        <select name="" id="" className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1">
                            <option value="categoria" className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1" selected disabled>Selecione um grupo</option>
                            {Dados.map((e) => {

                                return (
                                    <option className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1">{e.grupo}</option>
                                )
                            })}
                        </select>
                        <div className="rounded-md h-10 w-10 bg-inherit border-zinc-400 border-2">+</div>
                    </div>
                    <Input placeholder='Descrição' type="text" />
                    <Input placeholder='Valor' type="number" />
                    <div className="flex justify-between gap-2">
                        <select name="" id="" className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1">
                            <option value="categoria" selected disabled>Selecione a categoria</option>
                            {categoriasArray.map((categoria, index) => (
                                <option key={index} className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1">{categoria}</option>
                            ))}
                        </select>
                        <input type="color" className="rounded-md w-14 h-10 bg-inherit border-zinc-400 border-2 " />
                    </div>

                    <select name="select" id="select" className="rounded-md h-10 bg-inherit border-zinc-400 border-2 px-1">
                        <option value="Selecione" disabled selected>Selecione o metódo de pagamento</option>
                        <option value="Débito">Débito</option>
                        <option value="Crédito">Crédito</option>
                    </select>
                    <SendButton />
                </form >
            </div>

            {sucess && <MessageSucess />}
        </>
    )
}