
const express = require ("express");
const app = express();

import Sequelize from 'sequelize'
const sequelize = new Sequelize('test', 'root',123, {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao se conectar:"+erro)
})

app.listen(8081,function(){
    console.log("servidor rodando na url http://localhost:8081");
});