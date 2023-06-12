function carregarComentarios(nomeSecao) {

    fetch("/usuarios/carregarComentarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeSecaoServer: nomeSecao,
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    var feed = document.getElementById("div_comentarios");
                    var mensagem = document.createElement("span");
                    mensagem.innerHTML = "Ainda não foi feito nenhum comentário."
                    feed.appendChild(mensagem);
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    var feed = document.getElementById("div_comentarios");
                    feed.innerHTML = "";
                    for (let i = 0; i < resposta.length; i++) {
                        var publicacao = resposta[i];

                        // criando e manipulando elementos do HTML via JavaScript
                        var divPublicacao = document.createElement("div");
                        var usuarioNome = document.createElement("h4");
                        var pComentario = document.createElement("p");

                        usuarioNome.innerHTML = publicacao.nome;
                        pComentario.innerHTML = publicacao.comentario;

                        divPublicacao.className = "publicacao";
                        usuarioNome.className = "publicacao-nome";
                        pComentario.className = "publicacao-titulo";

                        divPublicacao.appendChild(usuarioNome);
                        divPublicacao.appendChild(pComentario);
                        feed.appendChild(divPublicacao);
                    }


                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
        });




}

function comentar(nomeSecao) {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    if (email != null && nome != null) {

        var comentario = input_comentario.value;

        if (comentario == "") {
            alert("Insira um comentário!");
        } else {

            fetch("/usuarios/comentar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nomeSecaoServer: nomeSecao,
                    idUsuarioServer: idUsuario,
                    comentarioServer: comentario
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    alert("Comentário postado com sucesso!");
                    location.reload();

                } else {
                    throw ("Houve um erro ao comentar!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            return false;

        }
    } else {
        window.location = "../login.html";
        alert('Faça login para continuar!');

    }

}



// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        
        var botaoCadastro = document.getElementById("button_cadastro");
        var divBotao = document.getElementById("div_button");
        var spanNomeUsuario = document.getElementById("span_username");

        var primeiroNome = nome.split(" ")[0];

        botaoCadastro.style.display = "none";

        divBotao.innerHTML += `<button id="button_logout" onclick="limparSessao()">Sair</button>`;
        spanNomeUsuario.innerHTML = ` ${primeiroNome}`;

    } 
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";

}
