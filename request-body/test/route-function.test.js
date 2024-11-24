import express from 'express';
import request from "supertest";

const app = express();

app.route("/products")
.get((req, res)=>{
    res.send("get product")
}).post((req, res)=>{
    res.send("Creaate Prduct")
}).put((req,res)=>{
    res.send("edit product")
})


test('test response', async () => {
    let response = await request(app).get("/products");
    expect(response.text).toBe("get product");

    response = await request(app).post("/products");
    expect(response.text).toBe("Creaate Prduct");

    response = await request(app).put("/products");
    expect(response.text).toBe("edit product");
});