// src/services/character-svc.ts
import { Schema, model } from "mongoose";
import { Character } from "../../models/character";
import { ObjectId } from "mongodb";

const CharacterSchema = new Schema<Character>(
    {
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

async function get(charName: string): Promise<Character> {
    try {
        const list = await CharacterModel.find({'characterName': charName});
        return list[0];
    } catch (err) {
        throw `${charName} Not Found`;
    }
}

// in src/services/traveler-svc.ts:
function create(json: Character): Promise<Character> {
    const t = new CharacterModel(json);
    return t.save();
}

// in src/services/traveler-svc.ts
function update(
    userid: String,
    traveler: Character
): Promise<Character> {
    return CharacterModel.findOneAndUpdate({ userid }, traveler, {
        new: true
    }).then((updated) => {
        if (!updated) throw `${userid} not updated`;
        else return updated as Character;
    });
}

function remove(userid: String): Promise<void> {
    return CharacterModel.findOneAndDelete({ userid }).then(
        (deleted) => {
            if (!deleted) throw `${userid} not deleted`;
        }
    );
}

export default { index, get, create, update, remove };