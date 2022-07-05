const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
const port = 3001;
const path = require('path');
const CurriculoControler = require('./controllers/curriculo-controller')
const createError = require('http-errors');



// Tratamento de Erros

//404
app.use((req, res, next) => {
    next(createError(404));
});

// Error Handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
})


// Configurando a visualização de configuração
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')


// Informando a porta que ele vai rodar
app.listen(port, err => {
    console.log('Server is listening on port ' . port)
});