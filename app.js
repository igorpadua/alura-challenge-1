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