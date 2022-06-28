// //////////////////////////////////////////////////////
// LIBRAIRIES
// //////////////////////////////////////////////////////

// Modules

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan'); 
const favicon = require('serve-favicon'); 
const cors = require('cors');

// Middlewares

const CRUDController = require('./controllers/CRUDController.js');
const LoginController = require('./controllers/LoginController.js');

// //////////////////////////////////////////////////////
// CHAMPS
// //////////////////////////////////////////////////////

const app = express();
const port = 3000;

const pathRoot = './data';
const pathFilms = pathRoot + '/films.json';
const pathUtilisateurs = pathRoot + '/utilisateurs.json';

// //////////////////////////////////////////////////////
// MIDDLEWARES Injection de dépendances
// //////////////////////////////////////////////////////

app
    .use(cors())
    .use(favicon(__dirname + '/favicon.ico')) 
    .use(morgan('dev'))
    .use(bodyParser.json());

// //////////////////////////////////////////////////////
// ROUTES
// //////////////////////////////////////////////////////

// -----------------------------------------------------
// Racine

app.get('/', (request, response)=>
{
    response.send('Racine de l\'API.');
});

// -----------------------------------------------------
// Films

app.get('/films',(request, response)=>
{
    response.json(CRUDController.GetAll(pathFilms));
});

app.get('/films/:id',(request, response)=>
{
    response.json(CRUDController.GetOne(pathFilms, request.params.id));
});

app.post('/films',(request, response) =>
{
    response.json(CRUDController.PostOne(pathFilms, request));
});

app.put('/films/:id',(request, response) =>
{
    response.json(CRUDController.PutOne(pathFilms,request));
});

app.delete('/films/:id',(request,response) =>
{
    response.json(CRUDController.DeleteOne(pathFilms,request.params.id));
});

// -----------------------------------------------------
// Utilisateurs

app.get('/utilisateurs',(request, response)=>
{
    response.json(CRUDController.GetAll(pathUtilisateurs));
});

app.get('/utilisateurs/:id',(request, response)=>
{
    response.json(CRUDController.GetOne(pathUtilisateurs, request.params.id));
});

app.post('/utilisateurs',(request, response) =>
{
    response.json(CRUDController.PostOne(pathUtilisateurs, request));
});

app.put('/utilisateurs/:id',(request, response) =>
{
    response.json(CRUDController.PutOne(pathUtilisateurs,request));
});

app.delete('/utilisateurs/:id',(request,response) =>
{
    response.json(CRUDController.DeleteOne(pathUtilisateurs,request.params.id));
});

// -----------------------------------------------------
// Login

app.get('/login',(request, response)=>
{
    response.json(LoginController.Login(pathUtilisateurs,request));
});

// -----------------------------------------------------
// Erreur

app.use(function(req, res, next) 
{
    res.status(404);
    res.send('404: route inconnue');
});

// //////////////////////////////////////////////////////
// DEMARRAGE
// //////////////////////////////////////////////////////

app.listen(port, ()=>
{
    console.log(`API démarrée sur http://localhost:${port}`);
});
