"use client"
import React from 'react'
export default function Select({ valueSelect, label, callback }) {
   
    return (

        <select name={valueSelect} id={valueSelect} className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1" >
            <option value={label} className="rounded-md h-10 bg-inherit border-zinc-400 border-2 w-full px-1" selected disabled>{label}</option>
            {callback()}
        </select>
    )
}
