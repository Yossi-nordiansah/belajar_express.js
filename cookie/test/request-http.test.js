import express from 'express';
import request from "supertest"

const app = express();

app.get("/", (req, res)=>{
    res.send(`hello ${req.query.name}`);
})

test('test query parameter', async () => {
    const response = await request(app).get("/").query({name : "world"});
    expect(response.text).toBe("hello world");
})