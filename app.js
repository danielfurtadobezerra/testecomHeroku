const express = require ("express");
const app = express();

//Criando rota inicial
app.get("/", function (req, res){
    res.send("Trabalho de Desenvolvimento de software em Nuvem");
})

//Rota de cadastro de alunos
app.get("/Aluno/", function (req, res){
    res.send("<h1>MEMBROS DA EQUIPE</h1>");
})

//Rota com parâmetro ex: https://http://localhost:3690/Aluno/Matheus
app.get("/Aluno/:parametro", function (req, res){
    res.send("Aluno listado: " + req.params.parametro );
})

app.get("/cadastro/:nome", function (req, res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Aluno: " + nome + "adicionado a equipe!</h1>");
    } else {
        res.send("Aluno adicionado!")
    }
 
})

//Criando a aplicação na porta 3690
const port = process.env.PORT || 3690;
app.listen(port, function (erro){
    if (erro){
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor Iniciado");
    }
})