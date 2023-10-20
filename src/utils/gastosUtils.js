import { gastos } from "../data/gastos";

export const addGastos = (NovoItem, Grupo) => {
  const grupoAdicionar = gastos.find((grupo) => grupo.grupo === Grupo);
  if (grupoAdicionar) {
    grupoAdicionar.despesas.push(NovoItem);
    console.log("Item adicionado com sucesso");
  } else {
    console.log("Grupo não encontrado."); // Grupo não encontrado
  }
};

export const removeGastos = (removeItem, grupoAlvo ) => {
  const grupo = gastos.find((grupo) => grupo.grupo === grupoAlvo);
  if (grupo) {
    grupo.despesas = grupo.despesas.filter(
      (despesa) => despesa.nome !== removeItem
    );
    console.log("item removido com sucesso")
  } else {
    console.log("Grupo não encontrado.");
  }
};