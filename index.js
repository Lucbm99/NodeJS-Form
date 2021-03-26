const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Team = require('./models/Time');

    app.listen(8089, function(req, res) {
        console.log("Servidor rodando na porta 8089");
    });

    //main - template padrão da aplicação
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));

    app.use(bodyParser.json());

    app.get('/', function(req, res) {
        Team.findAll().then(function (team) {
            res.render('home', {team: team})
        })
    });

    app.get('/addteams', function(req, res) {
        res.render('formulario');
    });


    app.post('/add', function(req, res) {
        Team.create({
            time: req.body.time,
            cidade: req.body.cidade,
            estado: req.body.estado
        }).then(function() {
            res.redirect('/');
        }).catch(function (error) {
            res.send("Erro ao cadastrar: "+error);
        })
    });

    app.get('/delete/:id', function(req, res) {
        Team.destroy({where: {'id': req.params.id}}).then(function() {
            res.redirect('/');
        }).catch(function(error) {
            res.send("Houve um erro: "+error);
        })
    })