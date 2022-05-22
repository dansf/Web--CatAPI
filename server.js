import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

app.use(express.static(__dirname  + "/client"));

app.listen(port, (e) => {
  if(e){
    console.log(`Error ${e}`);
    return;
  }
  
  console.log(`Listening on port ${port}`);
});
