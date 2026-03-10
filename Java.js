document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático

    const emailInput = document.getElementById("email").value;
    const errorSpan = document.getElementById("error-email");

    // Expressão regular para validar formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailInput)) {
        errorSpan.style.display = "inline"; // mostra mensagem de erro
    } else {
        errorSpan.style.display = "none"; // oculta mensagem
        alert("E-mail válido! Formulário enviado.");
        // aqui você pode prosseguir com o envio real
    }
});
