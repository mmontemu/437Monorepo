// src/services/traveler-svc.ts
import { Schema, model } from "mongoose";
import { Character } from "../models/character";
import { ObjectId } from "mongodb";

const CharacterSchema = new Schema<Character>(
    {
        _id: {type: ObjectId, required: true},
        characterName: {type: String, required: true, trim: true},
        pfpLink: {type: String, required: true, trim: true},
        class: {type: String, required: true, trim: true},
        race: {type: String, required: true, trim: true},
        playerName: {type: String, required: true, trim: true},
        playerLink: {type: String, required: true, trim: true},
    },
    { collection: "all-characters" }
);

const CharacterModel = model<Character>(
    "Profile",
    CharacterSchema
);

function index(): Promise<Character[]> {
    return CharacterModel.find();
}

function get(userid: String): Promise<Character> {
    return CharacterModel.find({ userid })
        .then((list) => list[0])
        .catch((err) => {
            throw `${userid} Not Found`;
        });
}

export default { index, get };