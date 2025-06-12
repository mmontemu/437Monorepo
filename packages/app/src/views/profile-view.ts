import {css, html, LitElement} from "lit";
import {property, state} from "lit/decorators.js";
import {define, Form} from "@calpoly/mustang";
import {Character} from "server/models/character.ts";



export class ProfileViewElement extends LitElement {
    static uses = define({
        "mu-form": Form.Element,
    });

    @property({attribute: "charid"})
    charid?: string;

    @property()
    mode = "view";

    get src() {
        return `/api/characters/${this.charid}`;
    }


    @state()
    character: Character = {
        characterName: "",
        pfpLink: "",
        class: "",
        race: "",
        playerName: "",
        playerLink: ""
    };

    override async updated(changed: Map<string, unknown>) {
        if (changed.has("charid") && this.charid) {

            const response = await fetch(this.src, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                this.character = await response.json();
            }
            else {
                console.log("invalid get: error code ");
            }
        }
    }

    override render() {
        return html`
             <h3>
                 ${this.character.characterName}
             </h3>
             <ul class="playerList">
                 <li class="pfp">
                     <img src=${this.character.pfpLink}
                              alt="playerPhoto">
                 </li>
                 <li>
                     ${this.character.class}
                 </li>
                 <li>
                     ${this.character.race}
                 </li>
                 <li>
                     <a href="${this.character.playerLink}">${this.character.playerName}</a>
                 </li>
             </ul>
    `;
    }

    static styles = [
        css`* {
                margin: 0;
        }
        header {
            background-color: var(--background-color-header);
            position: sticky;
            padding: 1vw;
            top: -10vh;
            height:100%;
            color:var(--text-color-header);
        }
        body {
            background-color: var(--background-color);
            box-sizing: border-box;
            color: var(--text-color);
        }
        a:link {
            color:var(--link-color);
        }
        a:visited {
            color:var(--link-color-visited);
        }
        svg.icon {
            height: 1.5em;
            width: 1.5em;
            vertical-align: middle;
            fill: currentColor;
        } 
        img {
            height: 4em;
            width: 4em;
            object-fit: contain;
            overflow: hidden;
        }
        `];

    connectedCallback() {
        super.connectedCallback();
        this.dispatchEvent(new CustomEvent("update-title", {
            bubbles: true,
            detail: { title: `Profile` }
        }));
    }
}