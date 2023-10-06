'use client'
import {useState} from "react"
import Input from "../Input/input"
import SendButton from '../Buttons/SendButton/sendButton'

export default function Form() {
    const [isActive, setIsActive] = useState(false)
    const [send, setSend] = useState(false)

    function handleSubmit (e){
        e.preventDefault()
        setSend(true)
        setTimeout(()=>{setSend(false)}, 3000)
    }   

    return (
        <>
        {isActive ? 
        <form onSubmit={handleSubmit} action = "" className = "flex flex-col gap-4 w-4/5 max-w-lg">
            <Input />
            <Input/>
            <Input/>
            <Input/>
            <SendButton/>
            <button  onClick={() => setIsActive(false)}>Fechar</button>
        </form > : 
        <button onClick={() => setIsActive(true)}>Mostrar</button>
       }
       {send && <p>Enviado com sucesso</p>}
        </>
    )
}