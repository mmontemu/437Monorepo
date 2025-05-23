import { ObjectId } from "mongoose";

export interface Character {
    _id: ObjectId;
    characterName: string;
    pfpLink: string;
    class: string;
    race: string;
    playerName: string;
    playerLink: string;
}