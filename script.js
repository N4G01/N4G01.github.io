
function substituirImagem() {
var imagem = document.getElementById("minhaImagem");
imagem.src = "carta_finish.gif"
}

// Abrir janela modal ao clicar no botão "Abrir Janela"

document.getElementById("abrirModal").addEventListener("click", function() {
	document.getElementById("janelaModal").style.display = "block";
});


// Fechar janela modal ao clicar no botão "Fechar" (×)

document.getElementById("fecharModal").addEventListener("click", function() {	document.getElementById("janelaModal").style.display = "none";
});

const botaoFugitivo = document.getElementById("botaoFugitivo");

botaoFugitivo.addEventListener("mouseover", function() {
    // Gere uma posição aleatória para o botão
    const novaPosicaoX = Math.floor(Math.random() * (window.innerWidth - 100));
    const novaPosicaoY = Math.floor(Math.random() * (window.innerHeight - 40));

    // Aplique a nova posição
    botaoFugitivo.style.left = novaPosicaoX + "px";
    botaoFugitivo.style.top = novaPosicaoY + "px";
});