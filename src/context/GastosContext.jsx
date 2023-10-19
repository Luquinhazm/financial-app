"use client"
import React, { createContext, useContext } from 'react';
import { gastos } from "@/data/gastos.js"


const GastosContext = createContext();

function GastosProvider({ children }) {
  // Você pode fornecer o valor que deseja compartilhar com os componentes filhos aqui.
  const dados = gastos

  return (
    <GastosContext.Provider value={dados}>
      {children}
    </GastosContext.Provider>
  );
}

export { GastosProvider, GastosContext };
