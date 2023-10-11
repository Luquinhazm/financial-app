function getLuminance(color) {
    // Extrai os componentes de cor (R, G, B)
    var r = parseInt(color.slice(1, 3), 16);
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);

    // Fórmula para calcular a luminância
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance;
}

export default function chooseTextColor(backgroundColor) {
    var luminance = getLuminance(backgroundColor);

    if (luminance > 0.5) {
        // Se a luminância for alta, escolha uma cor escura para o texto
        return "#000000"; // Preto
    } else {
        // Se a luminância for baixa, escolha uma cor clara para o texto
        return "#FFFFFF"; // Branco
    }
}