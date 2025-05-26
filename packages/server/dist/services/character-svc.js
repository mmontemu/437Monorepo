"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var character_svc_exports = {};
__export(character_svc_exports, {
  default: () => character_svc_default
});
module.exports = __toCommonJS(character_svc_exports);
var import_mongoose = require("mongoose");
const CharacterSchema = new import_mongoose.Schema(
  {
    characterName: { type: String, required: true, trim: true },
    pfpLink: { type: String, required: true, trim: true },
    class: { type: String, required: true, trim: true },
    race: { type: String, required: true, trim: true },
    playerName: { type: String, required: true, trim: true },
    playerLink: { type: String, required: true, trim: true }
  },
  { collection: "all-characters" }
);
const CharacterModel = (0, import_mongoose.model)(
  "Profile",
  CharacterSchema
);
function index() {
  return CharacterModel.find();
}
async function get(charName) {
  try {
    const list = await CharacterModel.find({ "characterName": charName });
    return list[0];
  } catch (err) {
    throw `${charName} Not Found`;
  }
}
function create(json) {
  const t = new CharacterModel(json);
  return t.save();
}
function update(userid, traveler) {
  return CharacterModel.findOneAndUpdate({ userid }, traveler, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated;
  });
}
function remove(userid) {
  return CharacterModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
var character_svc_default = { index, get, create, update, remove };
