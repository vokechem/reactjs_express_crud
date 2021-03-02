const express =require('express');
const bodyParser=require("body-parser");
const cors=require('cors');
const app= express();
const mysql=require("mysql")
const db =mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'crud_database',
    });
app.use(cors())
app.use(express.json())
app.use (bodyParser.urlencoded({extended:true})) 
app.get("/api/get",(req,res)=>{
    const sqlinsert="select * from movie_review"
db.query(sqlinsert,(err,result)=>{
   
    res.send(result)
});
}); 
app.post("/api/insert",(req,res)=>{
    const movieName=req.body.movieName
    const movieReview=req.body.movieReview
    const sqlinsert="insert into movie_review (movieName,movieReview) values (?,?);"
    db.query(sqlinsert,[movieName,movieReview],(err,result)=>{
        res.send("inserted successfully")
    })
})



app.listen(3001,()=>{
    console.log('server runing in port 3001')
});