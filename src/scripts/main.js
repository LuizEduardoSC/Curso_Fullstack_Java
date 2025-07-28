function mostrarMensagem() {
    const frases = [
        "Olá, Grunt!",
        "Build automático ativado!",
        "Menos trabalho manual, mais café ☕",
        "Minificando ideias... 💡",
        "Code like a ninja 🥷"
    ];

    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    const mensagem = document.createElement('h2');
    mensagem.textContent = aleatoria;
    mensagem.style.color = '#fff';
    mensagem.style.textShadow = '2px 2px 4px #000';
    mensagem.style.opacity = 0;
    mensagem.style.transition = 'opacity 2s ease';
    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.style.opacity = 1;
    }, 100);
}

mostrarMensagem();