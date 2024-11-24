import express from 'express';
import request from "supertest";

//middelware (menerima semua request dari client)
const logger = (req, res, next) => {
    console.log(`receive request : ${req.method} ${req.originalUrl}`);
    next()
};

const addPoweredHeader = (req, res, next)=>{
    res.set("X-Powered-By", "Programmer Zaman Now");
    next()
};

const addDate = (req, res, next)=>{
    req.requestTime = Date.now();
    next()
};

const apiKeyMiddleware = (req, res, next)=>{
    if(req.query.apiKey){
        next()
    }else{
        res.status(401).end()
    };
};

const app = express();

//penggunaan middelware
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(addDate);

app.get("/", (req, res)=>{
    res.send(`hello Yossi`);
})

app.get("/yossi", (req, res)=>{
    res.send(`hello Yossi Nordiansah`);
})

app.get("/time", (req, res)=>{
    res.send(`today is ${req.requestTime}`);
})

test('test response middleware', async () => {
    const response = await request(app).get("/").query({apiKey: "123"})
    expect(response.get("X-Powered-By")).toBe("Programmer Zaman Now");
    expect(response.text).toBe("hello Yossi");
});

test('test response middleware', async () => {
    const response = await request(app).get("/yossi").query({apiKey: "123"});
    expect(response.get("X-Powered-By")).toBe("Programmer Zaman Now");
    expect(response.text).toBe("hello Yossi Nordiansah");
});

test('test middleware unauthorized', async () => {
    const response = await request(app).get("/yossi")
    expect(response.status).toBe(401)
});

