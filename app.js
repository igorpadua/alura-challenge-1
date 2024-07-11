// Boas vindas ao primeiro desafio!
//
//     Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.
//
//     As "chaves" de criptografia que utilizaremos são:
//     A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
//
// Requisitos:
//     - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais
// - Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
//
//     Por exemplo:
//     "gato" => "gaitober"
// gaitober" => "gato"
//
// A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
// O resultado deve ser exibido na tela.

function criptografar() {
    const texto = document.getElementById("texto").value;
    document.getElementById("resultado").innerText = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("texto").value = "";
    document.getElementById("sem-mensagem").style.display = "none";
    document.getElementById("mensagem").style.display = "flex";
}

function descriptografar() {
    const texto = document.getElementById("texto").value;
    document.getElementById("resultado").innerText = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("texto").value = "";
    document.getElementById("sem-mensagem").style.display = "none";
    document.getElementById("mensagem").style.display = "flex";
}

function copiar() {
    const resultado = document.getElementById("resultado");
    resultado.select();
    navigator.clipboard.writeText(resultado.value).then(() => {
        document.getElementById("resultado").innerText = "";
    })

}