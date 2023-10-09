'use client'
import React, { useState } from 'react'
import Pagination from "../Buttons/Pagination/pagination"


export default function Painel() {

    const [show, setShow] = useState(0)

    return (
        <div className='w-full min-h-[100svh] flex flex-col justify-center max-w-sm'>

            <div className='flex gap-2 my-2'>
                <button className='p-1 rounded-md shadow' onClick={() => { setShow(0) }}>Credito</button>
                <button className='p-1 rounded-md shadow' onClick={() => { setShow(1) }}>Debito</button>
            </div>


            <div className='flex min-h-[85svh] w-full max-w-sm '>

                <div className={show === 0 ? 'flex gap-4 flex-col min-h-[85svh] flex-shrink-0 w-full' : 'hidden flex-col min-h-[85vh] flex-shrink-0 w-full'}>
                    <div className=' shadow-md w-full flex flex-col flex-1'>
                        <h3>title</h3>
                    </div>
                    <div className=' shadow-md w-full flex flex-col flex-1'>
                        <h3>title</h3>
                    </div>
                    <div className=' shadow-md w-full flex flex-col flex-1'>
                        <h3>title</h3>
                    </div>
                    
                </div>

                <div className={show === 1 ? 'flex gap-4 flex-col min-h-[85svh] flex-shrink-0 w-full ' : 'hidden  flex-col min-h-[85svh] flex-shrink-0 w-full'}>
                    <div className=' shadow-md w-full flex flex-col flex-1'>
                        <h3>title</h3>
                    </div>
                    <div className=' shadow-md bg-green-200 w-full flex flex-col flex-1'>
                        <h3>title</h3>
                    </div>
                    <div className=' shadow-md w-full flex flex-col flex-1'>
                        <h3>title</h3>
                    </div>
                </div>

            </div>
        </div>

    )
}

