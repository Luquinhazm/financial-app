import formatCurrency from "@/utils/formatCurrecy"
import chooseTextColor from "@/utils/chooseTextColor"

export default function CardExpenses({ grupo }) {
    const totalDespesas = grupo.despesas.reduce((total, despesa) => total + despesa.valor, 0);
    return (
        <div>
            <div className='flex items-center justify-between gap-1'>
                <h3 className='font-semibold'>{grupo.grupo}</h3>
                <span className='text-xs text-center px-1 py-[1px] bg-red-100 rounded-xl'>{formatCurrency(totalDespesas)}</span>
            </div>
            <div className='flex flex-col gap-2 py-3 justify-between border-b border-slate-500'>
                {grupo.despesas.map((despesa) => (
                    <div key={despesa.nome} className='flex border-b border-slate-200  justify-between'>
                        <div className='flex gap-1  items-start'>
                            <p>{despesa.nome}</p>
                            <p
                                style={{
                                    backgroundColor: `${despesa.colorCategoria}`,
                                    color: `${chooseTextColor(despesa.colorCategoria)}`
                                }}
                                className='text-xs px-1 rounded-xl'>{despesa.categoria}</p>
                        </div>
                        <p className='text-sm'>{formatCurrency(despesa.valor)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}