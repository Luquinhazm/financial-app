"use client"
import React, { createContext, useContext } from 'react';
import { gastos } from "@/data/gastos.js"


const GastosContext = createContext();
const categoriasUnicas = new Set();
gastos.forEach((e) => {
    e.despesas.forEach((d) => {
        categoriasUnicas.add(d.categoria);
    });
});
const categoriasArray = Array.from(categoriasUnicas);

function GastosProvider({ children }) {
  // Você pode fornecer o valor que deseja compartilhar com os componentes filhos aqui.
  const dados = gastos

  return (
    <GastosContext.Provider value={{dados, categoriasArray}}>
      {children}
    </GastosContext.Provider>
  );
}

export { GastosProvider, GastosContext };
