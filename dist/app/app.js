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
