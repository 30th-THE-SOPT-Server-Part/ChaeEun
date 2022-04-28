import express, { Request, Response, NextFunction } from "express";
<<<<<<< HEAD
import config from "./config";
=======
>>>>>>> fa29b2a5c6934f0e30893624d6c1a3ddcf0b8d42
const app = express();
import connectDB from "./loaders/db";
import routes from './routes';
require('dotenv').config();

<<<<<<< HEAD

=======
>>>>>>> fa29b2a5c6934f0e30893624d6c1a3ddcf0b8d42
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);   //라우터 
// error handler

interface ErrorType {
  message: string;
  status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
<<<<<<< HEAD
  .listen(config.port, () => { // config.port 를 불러오는거 
=======
  .listen(process.env.PORT, () => {
>>>>>>> fa29b2a5c6934f0e30893624d6c1a3ddcf0b8d42
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });