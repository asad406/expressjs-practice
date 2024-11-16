import express, { NextFunction, Request, Response } from 'express'
// const express = require('express')
const app = express();
const port = 3000;

// use parsers
app.use(express.json());
app.use(express.text());

const logger = (req:Request, res:Response, next: NextFunction)=>{
  console.log(req.url, req.method, req.hostname);
  next();
}
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
app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send('Hello developer!')
})
app.post('/',logger, (req:Request, res:Response)=>{
  console.log(req.body);
  // res.send("got data")
  res.json({
    message: "successfully received data"
  })
})

export default app