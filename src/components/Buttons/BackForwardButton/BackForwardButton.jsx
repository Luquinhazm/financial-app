import React from 'react'

export default function BackForwardButton({ BackOrForward, onClick }) {
    const LowerOption = BackOrForward ? BackOrForward.toLowerCase() : null
    
    let botao
    switch (LowerOption) {
        case null:
            botao = <></>
            break;
        case "back":
            botao = <button className='shadow mt-4 text-center h-8 w-8 rounded-full' onClick={onClick}> {"<"} </button>
            break;
        case 'forward':
            botao = <button className='shadow mt-4 text-center h-8 w-8 rounded-full' onClick={onClick}> {">"} </button>
            break
        default:
            botao = <></>
    }

    return botao
}