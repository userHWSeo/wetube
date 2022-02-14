import express from "express";
import { handle } from "express/lib/application";

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`Server listening on port http://localhost:${ PORT } 👍`)

app.listen(PORT, handleListening);