const Sequelize = require('sequelize');
//Conexão com o banco de dados MySql
//parametros -> qual banco, usuario, senha - host
//dialect - tipo de banco de dados
const sequelize = new Sequelize('times', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql',
    port: 3307
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}