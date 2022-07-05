const express = require('express');
const router = express.Router();

// Escrevendo no Body
app.get('/curriculo', (_req, res, next) => {
    const curriculoData = CurriculoControler.getData();
    res.render('curriculo', curriculoData);
});


module.exports = router;