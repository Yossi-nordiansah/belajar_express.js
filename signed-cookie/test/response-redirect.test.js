import express from 'express';
import request from "supertest"

const app = express();

app.get("/", (req, res)=>{
    res.redirect('/new-url')
})

test('test response redirect', async () => {
    let response = await request(app).get("/")
    expect(response.get("location")).toBe('/new-url')
    expect(response.status).toBe(302);
})