import express from "express";
import cors from "cors";
import winston from "winston";

import productRouter from "./routes/product.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.apiName = "product-api";
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `${global.apiName}.log` }),
  ],
  format: combine(label({ label: global.apiName }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());
app.use(cors());

app.use("/product", productRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3000, async () => {
  logger.info("API Started!");
});
