function mostrarResultado(emoção) {
    let resultado = document.querySelector('.texto-resultado');

    switch(emoção) {
        case 'feliz':
            resultado.textContent = "Você está se sentindo bem! A psicologia afirma que o bem-estar está ligado à saúde mental positiva e ao equilíbrio emocional. Continue cuidando de sua mente!";
            break;
        case 'ansioso':
            resultado.textContent = "A ansiedade pode ser uma resposta natural ao estresse, mas é importante reconhecer quando ela afeta sua qualidade de vida. A terapia pode ajudar a entender suas emoções.";
            break;
        case 'triste':
            resultado.textContent = "Momentos de tristeza fazem parte da experiência humana, mas se persistirem, podem indicar um quadro de depressão. Procurar apoio psicológico é essencial.";
            break;
        case 'neutro':
            resultado.textContent = "Sentir-se neutro também é válido. Às vezes, nossa mente busca equilíbrio. A psicologia ajuda a entender os momentos de calmaria e quando há necessidade de mudanças.";
            break;
        default:
            resultado.textContent = "Escolha uma opção para saber mais sobre como a psicologia pode explicar seus sentimentos.";
    }
}
