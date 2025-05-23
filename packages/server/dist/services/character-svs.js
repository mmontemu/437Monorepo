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
var character_svs_exports = {};
__export(character_svs_exports, {
  default: () => character_svs_default
});
module.exports = __toCommonJS(character_svs_exports);
var import_mongoose = require("mongoose");
var import_mongodb = require("mongodb");
const CharacterSchema = new import_mongoose.Schema(
  {
    _id: { type: import_mongodb.ObjectId, required: true },
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
function get(userid) {
  return CharacterModel.find({ userid }).then((list) => list[0]).catch((err) => {
    throw `${userid} Not Found`;
  });
}
var character_svs_default = { index, get };
