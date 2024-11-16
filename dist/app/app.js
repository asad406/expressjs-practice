"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
// use persers
app.use(express_1.default.json());
app.use(express_1.default.text());
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
app.get("/", (req, res) => {
    console.log(req.query);
    res.send('Hello developer!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    // res.send("got data")
    res.json({
        message: "successfully received data"
    });
});
exports.default = app;
