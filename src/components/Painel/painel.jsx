'use client'
import React, { useState } from 'react'
import { gastos } from "@/data/gastos.js"
import GroupCardExpenses from "@/components/Cards/GroupCardExpenses/GroupCardExpenses"
import BackForwardButton from "@/components/Buttons/BackForwardButton/BackForwardButton"
import Button from "@/components/Buttons/Button/Button"

export default function Painel() {
    const [show, setShow] = useState(0)
    const [hidden, setHidden] = useState(true)

    return (
        <>
            {hidden
                ?
                // Modo encolhido
                <BackForwardButton BackOrForward={"Forward"} onClick={() => { setHidden(false) }} />
                :
                // Modo Expandido
                <div className='w-full  flex flex-col max-w-sm'>
                    <div className='flex gap-2 py-3 justify-between my-1'>  {/* Grupo de Botões */}
                        <div className='space-x-2'>
                            <Button label={"Crédito"} onClick={() => { setShow(0) }} />
                            <Button label={"Debito"} onClick={() => { setShow(1) }} />
                        </div>
                        <BackForwardButton BackOrForward={"back"} onClick={() => { setHidden(true) }} />
                    </div>

                    <div className='flex flex-col flex-1 py-3 flex-shrink-0 w-full max-w-sm '>

                        <div className={`gap-4 flex-col min-h-[85svh] flex-shrink-0 w-full ${show === 0 ? "flex" : "hidden"}`}>
                            <GroupCardExpenses gastos={gastos}></GroupCardExpenses>
                        </div>

                        <div className={`gap-4 flex-col min-h-[85svh] flex-shrink-0 w-full ${show === 1 ? "flex" : "hidden"}`}>
                            <GroupCardExpenses></GroupCardExpenses>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}