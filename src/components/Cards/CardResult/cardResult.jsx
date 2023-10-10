import React from 'react'

export default function CardResult() {
  return (
    <div className='flex  flex-auto max-h-40 gap-2'>
        <div className='flex-1 mt-1 rounded-md shadow h-full '>Ultimo mês</div>
        <div className='flex-1 mt-1 rounded-md shadow h-full '>Renda do mês</div>
        <div className='flex-1 mt-1 rounded-md shadow h-full '>Divida</div>
        <div className='flex-1 mt-1 rounded-md shadow h-full '>Resta</div>
    </div>
  )
}
