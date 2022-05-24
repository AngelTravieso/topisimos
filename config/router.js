const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("index", {titulo : "mi titulo dinámico"})
});


router.get('/iniciar_sesion', (req,res) => {
    res.render('login/iniciar_sesion', {titulo: 'Inicio de sesión'});
});


router.get('/registro', (req,res) => {
    res.render('login/registro', {titulo: 'Registro'});
});

router.get('/inicio', (req,res) => {
    res.render('home/inicio', {titulo: 'Inicio'});
});




module.exports = router;