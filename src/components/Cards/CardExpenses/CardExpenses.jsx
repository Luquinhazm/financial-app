function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

function getLuminance(color) {
    // Extrai os componentes de cor (R, G, B)
    var r = parseInt(color.slice(1, 3), 16);
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);

    // Fórmula para calcular a luminância
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance;
}

function chooseTextColor(backgroundColor) {
    var luminance = getLuminance(backgroundColor);

    if (luminance > 0.5) {
        // Se a luminância for alta, escolha uma cor escura para o texto
        return "#000000"; // Preto
    } else {
        // Se a luminância for baixa, escolha uma cor clara para o texto
        return "#FFFFFF"; // Branco
    }
}

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
                            <p style={{backgroundColor: `${despesa.colorCategoria}`, color: `${chooseTextColor(despesa.colorCategoria)}`}} className={`text-xs px-1 rounded-xl`}>{despesa.categoria}</p>
                        </div>
                        <p className='text-sm'>{formatCurrency(despesa.valor)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}