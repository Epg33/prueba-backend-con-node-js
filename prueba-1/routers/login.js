const express = require('express');
const router = express.Router();
const mysql = require('mysql');


const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prueba_back',
  port: 3306
});

db.getConnection((err, conection)=>{
  if(err) throw err;
  console.log('todo bien');
})

router.get('/', (req, res)=>{
  res.sendFile(__dirname + '/public/login.html');
});