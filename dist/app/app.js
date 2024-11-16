"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
// use parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//Routing in expressJS
const userRouter = express_1.default.Router();
const jobRouter = express_1.default.Router();
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/users", userRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
//http://localhost:5000/api/v1/jobs/create-job
jobRouter.post('/create-job', (req, res) => {
    const job = req.body;
    console.log(job);
    res.json({
        success: true,
        message: "Job is created successfully",
        data: job
    });
});
//Middleware in express.js
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
/*
//for params
//http://localhost:5000/56/72
app.get("/:userId/:subId", (req: Request, res: Response) => {
  console.log(req.params);
  res.send('Hello developer!')
})
*/
//for Query
//http://localhost:5000?email=a@a.com&name=asad
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send('Hello developer!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send("got data")
    res.json({
        message: "successfully received data"
    });
});
exports.default = app;
