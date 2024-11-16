import exp from 'constants';
import express, { NextFunction, Request, Response } from 'express'
// const express = require('express')
const app = express();
const port = 3000;

// use parsers
app.use(express.json());
app.use(express.text());
//Routing in expressJS
const userRouter = express.Router();
const jobRouter = express.Router();
app.use("/api/v1/jobs",jobRouter)
app.use("/api/v1/users",userRouter);
userRouter.post("/create-user", (req:Request, res: Response)=>{
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  })
})
//http://localhost:5000/api/v1/jobs/create-job
jobRouter.post('/create-job', (req:Request, res:Response)=>{
  const job = req.body;
  console.log(job);
  res.json({
    success: true,
    message: "Job is created successfully",
    data: job
  })
})
//Middleware in express.js
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