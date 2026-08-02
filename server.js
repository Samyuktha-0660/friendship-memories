const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "friendship"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected ✅");
    }
});
app.post("/save",(req,res)=>{

    console.log("API Called");
    console.log(req.body);

    const {name,dob,message}=req.body;

    db.query(
        "INSERT INTO messages(name,dob,message) VALUES(?,?,?)",
        [name,dob,message],
        (err,result)=>{

            if(err){
                console.log(err);
                return res.send("Error");
            }

            console.log("Inserted");
            res.send("Saved");

        }
    );

});
app.listen(3000, () => {
    console.log("Server Running : http://localhost:3000");
});