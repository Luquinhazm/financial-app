import AddButton from '@/components/Buttons/AddButton/addButton'
import React from 'react'
import CardExpenses from "../CardExpenses/CardExpenses"

export default function GroupCardExpenses({ gastos }) {
    return (
        <div className='shadow-md p-2 w-full gap-4 flex flex-col flex-1'>
            {gastos ?
                gastos.map((grupo) => <CardExpenses key={grupo.grupo} grupo={grupo} />)
                :
                <div className='flex flex-col gap-2 flex-1 justify-center items-center'>
                    <p className='font-semibold'>Deseje adiciona um novo grupo</p>
                    <AddButton />
                </div>
            }
        </div >
    )
}