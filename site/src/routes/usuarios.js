var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/obterDadosAoCarregar", function (req, res) {
    usuarioController.obterDadosAoCarregar(req, res);
});

router.post("/carregarComentarios", function (req, res) {
    usuarioController.carregarComentarios(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/comentar", function (req, res) {
    usuarioController.comentar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;