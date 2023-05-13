// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        
        var botaoCadastro = document.getElementById("button_cadastro");
        var divBotao = document.getElementById("div_botao");
        
        botaoCadastro.style.display = "none";

        // window.alert(`Seja bem-vindo, ${nome}!`);
        // b_usuario.innerHTML = nome;

        // return true;
        // finalizarAguardar();
    } else {

        window.location = "../login.html";
        alert('Faça login para continuar!');
    
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}
