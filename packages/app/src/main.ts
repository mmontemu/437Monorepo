import {
    Auth,
    define,
    History,
    Switch
} from "@calpoly/mustang";

import { html } from "lit";
import { ProfileViewElement } from "./views/profile-view.ts";
import {HomeViewElement} from "./views/home-view.ts";
import {CharacterGeneratorViewElement} from "./views/CharacterGeneratorView.ts";

const routes = [
    {
        path: "/app/character/:username",
        view: (params: Switch.Params) => html`
      <profile-view charid="${params.username}"></profile-view>
    `
    },
    {
        path: "/app",
        view: () => html`
      <home-view></home-view>
    `
    },
    {
        path: "/app/random-char-gen",
        view: () => html`
      <rand-gen-view></rand-gen-view>
    `
    },
    {
        path: "/",
        redirect: "/app"
    }
];

define({
    "mu-auth": Auth.Provider,
    "mu-history": History.Provider,
    "mu-switch": class AppSwitch extends Switch.Element {
        constructor() {
            super(routes, "rndnd:history", "rndnd:auth");
        }
    },
    "rand-gen-view":CharacterGeneratorViewElement,
    "home-view": HomeViewElement,
    "profile-view": ProfileViewElement
});