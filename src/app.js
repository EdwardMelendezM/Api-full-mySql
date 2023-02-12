import morgan from "morgan";
const express = require("express");
const app = express();

//Setting
app.set("port", 4000)

//Middleware  
app.use(morgan("dev"));

export default app;