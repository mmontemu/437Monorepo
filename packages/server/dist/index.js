"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_mongo = require("./services/mongo");
var import_path = __toESM(require("path"));
var import_character_svc = __toESM(require("./services/character-svc"));
var import_characters = __toESM(require("./routes/characters"));
var import_auth = __toESM(require("./routes/auth"));
var import_promises = __toESM(require("node:fs/promises"));
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
const staticDir = process.env.STATIC || "public";
app.use(import_express.default.json());
app.use("/app", (req, res) => {
  const indexHtml = import_path.default.resolve(staticDir, "index.html");
  import_promises.default.readFile(indexHtml, { encoding: "utf8" }).then(
    (html) => res.send(html)
  );
});
app.use(import_express.default.static(staticDir));
app.use("/api/characters", import_auth.authenticateUser, import_characters.default);
(0, import_mongo.connect)("characters");
app.get("/hello", (req, res) => {
  res.send("Hello, World");
});
app.get("characters/:name", (req, res) => {
  const { name } = req.params;
  import_character_svc.default.get(name).then((data) => {
    console.log(data);
    if (data) res.set("Content-Type", "application/json").send(JSON.stringify(data));
    else res.status(404).send();
  });
});
app.use("/auth", import_auth.default);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
