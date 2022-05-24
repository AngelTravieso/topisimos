const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// Rutas web
app.use('/', require('./config/router'));


// Carpeta de archivos estáticos
app.use(express.static(__dirname + '/public'));


// Ruta de error
app.use((req, res, next) => {
    res.status(404).render("error/404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})


app.listen(port, ()  => {
    console.log(`Server running at port ${port}`);
});