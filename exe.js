// Função para calcular a média
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// Função para verificar se o aluno foi aprovado ou reprovado
function verificarStatus(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Função principal
function calcularEStatusDasNotas(n1, n2, n3) {
    const media = calcularMedia(n1, n2, n3);
    const status = verificarStatus(media);

    // Retornar a média e o status
    return {
        media: media,
        status: status
    };
}

// Exemplo de uso do programa
const notas = [7, 8, 5]; // Substitua esses valores pelas notas do aluno
const resultado = calcularEStatusDasNotas(...notas);

console.log("Média do aluno:", resultado.media);
console.log("Status:", resultado.status);
