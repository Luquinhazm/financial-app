import React from 'react'

export default function CardGrupo() {
    return (
        <div className=' shadow-md p-2 w-full gap-4 flex flex-col flex-1'>
            <div className='flex items-center justify-between gap-1'>
                <h3 className='font-semibold'>Custos Fixos</h3>
                <span className='text-xs text-center px-1 py-[1px] bg-red-100 rounded-xl'>R$ 589,82</span>
            </div>
            <div className='flex  py-3 justify-between border-b border-slate-200'>
                <div className='flex gap-1 items-start'>
                    <p>Faculdade</p>
                    <p className='text-xs bg-blue-100 px-1 rounded-xl'>Estudo</p>
                </div>
                <p>R$ 232,22</p>
            </div>
        </div>
    )
}
