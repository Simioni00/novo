const express = require ('express');

const app = express();

app.get("/", function(request, response){
    console.log("Primeira Requisição Recebida!");
    response.status(200).json({ message: "Resposta enviada em JSON"});
});
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação Rodando na Porta 3000");
});
