'use client'
import React, { useState } from 'react'
import CardGrupo from "@/components/Cards/CardGrupo/CardGrupo"
import BackForwardButton from "@/components/Buttons/BackForwardButton/BackForwardButton"

export default function Painel() {
    const [show, setShow] = useState(0)
    const [hidden, setHidden] = useState(true)
    // <button className='shadow mt-4 text-center h-8 w-8 rounded-full' onClick={() => { setHidden(false) }}>{">"}</button>
    return (
        <>
            {hidden ?
                <BackForwardButton BackOrForward={"Forward"} onClick={() => { setHidden(false) }} />
                :
                <div className='w-full  flex flex-col max-w-sm'>
                    <div className='flex gap-2 py-3 justify-between my-1'>
                        <div className='space-x-2'>
                            <button className='p-1 rounded-md shadow' onClick={() => { setShow(0) }}>Credito</button>
                            <button className='p-1 rounded-md shadow' onClick={() => { setShow(1) }}>Debito</button>
                        </div>

                        <BackForwardButton BackOrForward={"back"} onClick={() => { setHidden(true) }} />
                    </div>

                    <div className='flex flex-auto py-3 flex-shrink-0 w-full max-w-sm '>
                        <div className={show === 0 ? 'flex gap-4 flex-col min-h-[85svh] flex-shrink-0 w-full' : 'hidden flex-col min-h-[85vh] flex-shrink-0 w-full'}>
                            <CardGrupo></CardGrupo>
                        </div>

                        <div className={show === 1 ? 'flex gap-4 flex-col min-h-[85svh] flex-shrink-0 w-full ' : 'hidden  flex-col min-h-[85svh] flex-shrink-0 w-full'}>
                            <div className=' shadow-md w-full flex flex-col flex-1'>
                                <h3>title</h3>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}