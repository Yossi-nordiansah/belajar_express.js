import express from 'express';
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("sangatrahasia"));
app.use(express.json());

app.get("/", (req, res)=>{
    const name = req.signedCookies['Login'];
    res.send(`hello ${name}`)
});

app.post("/login", (req, res)=>{
    const name = req.body.name;
    res.cookie("Login", name, {path: "/", signed: true});
    res.send(`hello ${name}`)
});

test('test cookie read', async () => { 
    const response = await request(app).get("/").set("Cookie", "Login=s%3AYossi.I1g0VTpS5ACBgkH9nYcfs5rP%2BnRk4hbJdt1tLrIMCZU; Path=/")
    expect(response.text).toBe('hello Yossi')
 })

 test('test cookie write', async () => { 
    const response = await request(app).post("/login").send({name : "Yossi"})
    expect(response.get("Set-Cookie").toString()).toContain('Login=Yossi; Path=/');
    expect(response.text).toBe('hello Yossi');
 })

