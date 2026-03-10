// Função para definir um Cookie
const definirCookie = (nome, valor, dias) => {
    const data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = `${nome}=${valor};expires=${data.toUTCString()};path=/`;
};

// Função para obter um Cookie
const obterCookie = (nome) => {
    const nomeEQ = nome + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nomeEQ) == 0) return c.substring(nomeEQ.length, c.length);
    }
    return null;
};

// Verificação ao carregar a página (Controle de Estado)
window.onload = () => {
    const usuarioSalvo = obterCookie("nomeUsuario");
    if (usuarioSalvo) {
        document.getElementById("mensagem").innerText = `Bem-vindo de volta, ${usuarioSalvo}!`;
        document.getElementById("mensagem").style.color = "blue";
    }
};

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const msgElemento = document.getElementById("mensagem");

    // Expressão Regular para validação de E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let formularioValido = true;

    // Validação de Nome
    if (campoNome.value.trim() === "") {
        campoNome.style.border = "2px solid red";
        formularioValido = false;
    } else {
        campoNome.style.border = "2px solid green";
    }

    // Validação de E-mail com RegEx
    if (!emailRegex.test(campoEmail.value)) {
        campoEmail.style.border = "2px solid red";
        formularioValido = false;
    } else {
        campoEmail.style.border = "2px solid green";
    }

    // Feedback Final e Armazenamento
    if (formularioValido) {
        msgElemento.innerText = "Cadastro realizado com sucesso!";
        msgElemento.style.color = "green";
        
        // Implementação do Cookie
        definirCookie("nomeUsuario", campoNome.value, 7);
    } else {
        msgElemento.innerText = "Erro: Verifique os campos em vermelho.";
        msgElemento.style.color = "red";
    }
});
