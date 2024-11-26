import express from 'express';
import request from "supertest";
import expressFileUpload from "express-fileupload";

const app = express();
app.use(expressFileUpload())

app.post("/file", async (req, res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname + '/upload/' + textFile.name);

    res.send(`hello ${req.body.name}, you upload ${textFile.name}`)
})

test('test request file', async () => {
    const response = await request(app).post("/file").set("Content-Type", "multipart/form-data").field("name", "Yossi").attach("article", __dirname + "/static/contoh.txt")
    expect(response.text).toBe("hello Yossi, you upload contoh.txt");
})
