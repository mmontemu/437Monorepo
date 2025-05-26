import { ObjectId } from "mongoose";

export interface Character {
    characterName: string;
    pfpLink: string;
    class: string;
    race: string;
    playerName: string;
    playerLink: string;
}