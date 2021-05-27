const express = require("express");
const app = express();
let cors = require('cors')

app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(cors());

let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: null,
    database: "angular"
});

connection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Conexión correcta")
    }
});

app.get("/discos", function(req, res){
    let sql;
    let params = [req.query.id];
        if (req.query.id){
            sql = "SELECT * FROM discos WHERE discos_id = ?"
        }
        else{
            sql = "SELECT * FROM discos"
        }
    connection.query(sql, params, function(err, dis){
        if(err){
            console.log(err);
        }
        else{
            res.send(dis);
            console.log(dis)
        }
    })
});


app.post("/discos", function(req, res){
    let params = [req.body.titulo, req.body.interprete, req.body.anyopublicacion];
    let sql = "INSERT INTO discos (titulo, interprete, anyopublicacion) VALUES (?, ?, ?)";
    connection.query(sql, params, function(err, dis){
        if(err){
            console.log(err);
        }
        else{
            if(dis.insertId){
                res.send(String(dis.insertId));
            }
            else{
                res.send("-1")
            }
        }
    });
});

app.put("/discos", function(req, res){
    let params = [req.body.titulo, req.body.interprete, req.body.anyopublicacion, req.query.id];
    let sql = "UPDATE discos SET titulo = ?, interprete = ?, anyopublicacion = ? WHERE discos_id = ?";
    connection.query(sql, params, function(err, dis){
        if(err){
            console.log(err);
        }
        else{
            console.log(dis);
            res.send(dis);
        }
    });
});

app.delete("/discos", function(req, res){
    let params = [req.query.id];
    let sql = "DELETE FROM discos WHERE discos_id = ?";
    connection.query(sql, params, function(err, dis){
        if(err){
            console.log(err);
        }
        else{
            res.send(dis);
        }
    });
});

app.listen(3000, function(){
    console.log("Servidor web escuchando en el puerto 3000")
});

