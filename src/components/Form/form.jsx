'use client'

import {useState} from "react"
import Input from "../Input/input"
import SendButton from '../Buttons/SendButton/sendButton'


export default function Form({onSubmit}) {
  

    return (
        <>
        
        <form onSubmit={onSubmit} action = "" className = "flex flex-col gap-4 w-4/5 max-w-lg">
            <Input placeholder='Descrição' type="text"/>
            <Input placeholder='Valor' type="number"/>
            <SendButton/>
        </form > 
      
    
        </>
    )
}