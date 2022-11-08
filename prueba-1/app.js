//configurando
const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');

const app=express();
const port = 3000 || process.env.PORT;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba_back',
    port: 3306
});

db.getConnection((err, conection)=>{
    if(err) throw err;
    console.log('xd');
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/', (req, res)=>{
    let C_C = req.body.C_C;
    let nombre = req.body.nombre;
    let edad = req.body.edad;
    let email = req.body.email;
    let contraseña = req.body.contraseña;
    let telefono = req.body.telefono;
    let comand= `INSERT INTO registro (C_C, nombre, edad, email, telefono, contraseña) VALUES("${C_C}", "${nombre}", "${edad}", "${email}", "${telefono}", "${contraseña}")`;
    
    db.getConnection((err, conection)=>{
      if (err) throw err;
      conection.query(comand, (err, result)=>{
        if (err) throw err;
        console.log('listo pa');
      })
    });
    res.redirect('/login');
    console.log(req.body);
    console.log(nombre);
});

app.get('/login', (req, res)=>{
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/prueba', (req, res)=>{
  res.sendFile(__dirname + '/public/prueba.html');
});

app.listen(port, ()=>{
  console.log('Server on port '+port);
});