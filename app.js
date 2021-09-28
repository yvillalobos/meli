const express = require('express');
const path = require('path');
const app = express();

const users = [];

//app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded());


app.listen(process.env.PORT || 3000, () => {
    console.log("Levantando un servidor con Express en ", "http://localhost:3000");
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.post('/registro', (req, res) => {
    console.log(req.body);
    // Guardar en el sistema
    users.push(req.body);
    // Redireccionamos a la pagina
    res.redirect('/');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    // Redireccionamos a la pagina
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/users', (req, res) => {
    res.send(users);
});