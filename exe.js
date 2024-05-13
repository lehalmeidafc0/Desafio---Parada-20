<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Média</title>
</head>
<body>
    <h2>Calculadora de Média</h2>
    <form id="formMedia">
        <label for="nota1">Nota 1:</label>
        <input type="number" id="nota1" name="nota1" required><br><br>
        
        <label for="nota2">Nota 2:</label>
        <input type="number" id="nota2" name="nota2" required><br><br>
        
        <label for="nota3">Nota 3:</label>
        <input type="number" id="nota3" name="nota3" required><br><br>
        
        <button type="button" onclick="calcularMedia()">Calcular Média</button>
    </form>

    <p id="resultado"></p>

    <script>
        function calcularMedia() {
            // Obtendo os valores das notas
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);

            // Calculando a média
            var media = (nota1 + nota2 + nota3) / 3;

            // Verificando se o aluno foi aprovado ou reprovado
            var resultado = "";
            if (media >= 6) {
                resultado = "Parabéns! Você foi aprovado com média " + media.toFixed(2);
            } else {
                resultado = "Você foi reprovado com média " + media.toFixed(2);
            }

            // Exibindo o resultado na página
            document.getElementById("resultado").innerHTML = resultado;
        }
    </script>
</body>
</html>
