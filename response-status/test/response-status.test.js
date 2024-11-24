import express from 'express';
import request from "supertest"

const app = express();

app.get("/", (req, res)=>{
    if(req.query.name){
        res.status(200).send(req.query.name)
    }else{
        res.status(400).end();
    }
})

test('test response', async () => {
    let response = await request(app).get("/").query({name: "Yossi Nordiansah"})
    expect(response.text).toBe("Yossi Nordiansah");
    expect(response.status).toBe(200);

    response = await request(app).get("/");
    expect(response.status).toBe(400);
})