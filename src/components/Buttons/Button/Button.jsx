import React from 'react'

export default function Button({label, onClick}) {
  return (
    <button className='p-1 h-fit rounded-md shadow' onClick={onClick}>{label}</button>
  )
}
