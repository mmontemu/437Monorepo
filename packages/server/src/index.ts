// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
// src/index.ts
// at the top:
import {ObjectId} from "mongodb";
import Characters from "./services/character-svc";
import characters from "./routes/characters";
const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.json());
app.use("/api/characters", characters);

connect("characters");

app.use(express.static(staticDir));


app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

// with the other routes:
app.get("/characters/:name", (req: Request, res: Response) => {
    const { name } = req.params;
    Characters.get(name).then((data) => {
        console.log(data);
        if (data) res
            .set("Content-Type", "application/json")
            .send(JSON.stringify(data));
        else res
            .status(404).send();
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});