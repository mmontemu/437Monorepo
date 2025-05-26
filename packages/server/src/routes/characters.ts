// src/routes/travelers.ts
import express, { Request, Response } from "express";
import { Character } from "../models/character";

import CharacterSchema from "../services/character-svc";

const router = express.Router();

// in src/routes/travelers.ts
router.get("/", (_, res: Response) => {
    CharacterSchema.index()
        .then((list: Character[]) => res.json(list))
        .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;

    CharacterSchema.get(userid)
        .then((traveler: Character) => res.json(traveler))
        .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
    const newTraveler = req.body;

    CharacterSchema.create(newTraveler)
        .then((traveler: Character) =>
            res.status(201).json(traveler)
        )
        .catch((err) => res.status(500).send(err));
});

// in src/routes/travelers.ts, after our previous routes
router.put("/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
    const newTraveler = req.body;

    CharacterSchema.update(userid, newTraveler)
        .then((traveler: Character) => res.json(traveler))
        .catch((err) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;

    CharacterSchema.remove(userid)
        .then(() => res.status(204).end())
        .catch((err) => res.status(404).send(err));
});

export default router;