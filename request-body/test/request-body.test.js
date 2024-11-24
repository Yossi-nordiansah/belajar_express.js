import express from 'express';
import request from "supertest";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post("/", (req, res)=>{
    const name = req.body.name;
    res.json({
        hello : `hello ${name}`
    });
});

app.get("/form", (req, res)=>{
    const name = req.body.name;
    res.json({
        hello : `hello ${name}`
    });
});

test('test req json', async () => { 
    const response = await request(app).post("/").set("Content-Type", "application/json").send({name : "world"})
    expect(response.body).toEqual({
        "hello": "hello world"
    })
 })

