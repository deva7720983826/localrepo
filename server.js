const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"studentdb"
});

db.connect();

app.post("/addStudent",(req,res)=>{

    const {name,email} = req.body;

    const sql =
    "INSERT INTO students(name,email) VALUES(?,?)";

    db.query(sql,[name,email],(err,result)=>{

        if(err){
            return res.status(500).json({message:"Error"});
        }

        res.json({message:"Student Saved"});
    });

});

app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});