// Inisialisasi variabel untuk menggunakan modul(?)
var express = require('express');
var app = express();
var port = 3000;
var pool = require('./config/dbconfig.js');
var router = require('./routes/index');


app.use(express.json());
app.use(router);


pool.connect((err, res) => {
    console.log(err);
    console.log('Connected');
});

app.listen(port, () => console.log(`Server running on port ${port}`));