function validaFormulario(){
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    // validação dos campos preenchidos
    if( nome == "" || email == "" || senha == "" ){
        alert("error")
    }
    // validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // validação da senha
    if(emailRegex.test(email)){
        alert("Por favor, insira um e-mail válido")
    }
    // validação da senha
    if(senha.length > 8){
        alert("Limite de caracteres excedido!")
    }

}