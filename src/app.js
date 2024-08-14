import express from "express";

// Project Imports
import v1Router from "./routes/index.js";
import './db/connection.js';

// Third Party Imports
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

// Server
const app = express();

// Options
const port = process.env.SERVER_PORT || 3000;
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middlewares
app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('combined'));

// Routes
app.use('/api', v1Router);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
