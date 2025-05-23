// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
// src/index.ts
// at the top:
import {ObjectId} from "mongodb";
import Characters from "./services/character-svs";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("cluster0");

app.use(express.static(staticDir));


app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

// with the other routes:
app.get("/character/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    Characters.get({ _id: new ObjectId(id) }).then((data) => {
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