import express from 'express';
import request from "supertest"

const app = express();

app.get("/", (req, res)=>{
    res.set({
        "X-Powered-by" : "Programmer zaman now",
        "X-Author" : 'Yossi Nordiansah'
    });
    res.send('hello response');
})

test('test response', async () => {
    let response = await request(app).get("/")
    expect(response.text).toBe("hello response");
    expect(response.get("X-Powered-by")).toBe("Programmer zaman now");
    expect(response.get("X-Author")).toBe("Yossi Nordiansah");

})