import express from 'express';
import request from "supertest"

const app = express();

app.get("/", (req, res)=>{
    const type = req.get("accept")
    res.send(`hello ${type}`);
})

test('test request header', async () => {
    const response = await request(app).get("/").set("Accept", "apllication/json");
    expect(response.text).toBe("hello apllication/json");
})