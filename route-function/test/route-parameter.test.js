import express from 'express';
import request from "supertest"

const app = express();

app.get("/products/:id", (req, res)=>{
    const idProduct = req.params.id;
    res.send(`product : ${idProduct}`);
})

app.get("/categories/:id(\\d+)", (req, res)=>{
    const idProduct = req.params.id;
    res.send(`product : ${idProduct}`);
})

test('test response', async () => {
    let response = await request(app).get("/products/yossi");
    expect(response.text).toBe("product : yossi");

    response = await request(app).get("/categories/wrong");
    expect(response.status).toBe(404);
});