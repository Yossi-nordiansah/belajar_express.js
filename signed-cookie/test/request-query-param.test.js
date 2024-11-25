import express from 'express';
import request from "supertest"

const app = express();

app.get("/", (req, res)=>{
    res.send(`hello ${req.query.firstname} ${req.query.lastname}`);
})

test('test request query param', async () => {
    const response = await request(app).get("/").query({firstname : "Yossi", lastname: "Nordiansah"});
    expect(response.text).toBe("hello Yossi Nordiansah");
})