import express from 'express';
import request from "supertest";
import expressFileUpload from "express-fileupload";

const app = express();
app.use(expressFileUpload())

app.get("/file", async (req, res) => {
   res.send("hello response");
});

app.use((req, res, next)=>{
    res.status(404).send(`404 not pond`)
})

test('test request file', async () => {
    const response = await request(app).get("/file");
    expect(response.text).toBe("hello response");
})

test('test', async () => {
    const response = await request(app).get("/file/not-pond");
    expect(response.text).toBe("404 not pond");
})