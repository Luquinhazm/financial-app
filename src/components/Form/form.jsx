'use client'

import {useState} from "react"
import Input from "../Input/input"
import SendButton from '../Buttons/SendButton/sendButton'

export default function Form() {
    const [sucess, setSucess] = useState(false)

    function handleSubmit (e){
        e.preventDefault()
        setSucess(true)
        setTimeout(()=>{setSucess(false)}, 3000)
    }   

    return (
        <>
        
        <form onSubmit={handleSubmit} action = "" className = "flex flex-col gap-4 w-4/5 max-w-lg">
            <Input />
            <Input/>
            <Input/>
            <Input/>
            <SendButton/>
        </form > 
       
       {sucess && <p>Enviado com sucesso </p>}
        </>
    )
}