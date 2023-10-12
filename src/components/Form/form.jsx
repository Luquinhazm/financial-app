'use client'

import { useState } from "react"
import Input from "../Input/input"
import SendButton from '../Buttons/SendButton/sendButton'
import MessageSucess from "../MessageSucess/messageSucess"



export default function Form() {

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
                    <Input placeholder='Descrição' type="text" />
                    <Input placeholder='Valor' type="number" />
                    <SendButton />
                </form >
            </div>

            {sucess && <MessageSucess />}
        </>
    )
}