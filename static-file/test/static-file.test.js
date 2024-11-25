import express from 'express';
import request from "supertest"

const app = express();
// app.use(express.static(__dirname + "/static")); //bisa seperti ini
app.use('/static',express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.send("hello world");
})

test('test express static file', async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("hello world");
})

test('test express static file contoh.txt', async () => {
    const response = await request(app).get("/contoh.txt");
    expect(response.text).toBe("ini adalah contoh");
})

test('test express static file /static/contoh.txt', async () => {
    const response = await request(app).get("/static/contoh.txt");
    expect(response.text).toBe("ini adalah contoh");
})