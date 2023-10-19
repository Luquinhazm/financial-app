import React from 'react'
import {GastosProvider} from "../context/GastosContext"

export default function Providers({children}) {
  return (
    <GastosProvider>
        {children}
    </GastosProvider>
  )
}
