import express from 'express';
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res)=>{
    const name = req.cookies['name']
    res.send(`hello ${name}`)
});

app.post("/login", (req, res)=>{
    const name = req.body.name;
    res.cookie("Login", name, {path: "/"});
    res.send(`hello ${name}`)
});

test('test cookie read', async () => { 
    const response = await request(app).get("/").set("Cookie", "name=Yossi;author=programmer zaman now")
    expect(response.text).toBe('hello Yossi')
 })

test('test cookie write', async () => { 
    const response = await (await request(app).post("/login")).send({name : "Yossi"})
    expect(response.get("Set-Cookie").toString()).toBe('Login=Eko; Path=/');
    expect(response.text).toBe('hello Yossi');
 })

