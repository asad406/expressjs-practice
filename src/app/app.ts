import express, { Request, Response } from 'express'
// const express = require('express')
const app = express();
const port = 3000;

// use percher
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello developer!')
})
app.post('/', (req:Request, res:Response)=>{
  console.log(req.body);
  res.send("got data")
})

export default app