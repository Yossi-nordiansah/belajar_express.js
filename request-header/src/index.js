import express from 'express';
import request from "supertest"

const app = express();

app.get("/", (req, res)=>{
    res.send("hello world");
})

app.listen(3000, ()=>console.log("server running on port 3000"))