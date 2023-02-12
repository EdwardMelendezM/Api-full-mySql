import morgan from "morgan";
import languageRoutes from "./routes/language.routes";
const express = require("express");
const app = express();

//Setting
app.set("port", 4000)

//Middleware  
app.use(morgan("dev"));
app.use(languageRoutes);

export default app;