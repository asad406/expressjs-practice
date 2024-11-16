import express, { Request, Response } from 'express'
// const express = require('express')
const app = express();
const port = 3000;

// use persers
app.use(express.json());
app.use(express.text());
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
app.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  res.send('Hello developer!')
})
app.post('/', (req:Request, res:Response)=>{
  console.log(req.body);
  // res.send("got data")
  res.json({
    message: "successfully received data"
  })
})

export default app