import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";
import {define} from "@calpoly/mustang";
import {CharacterElement} from "./character.ts";

export class CharElement extends LitElement {

    static uses = define({
        "character-element": CharacterElement,
    });
    @property()
    src?: string;

    @state()
    characters: Array<Character> = [];


    override render() {
        const characterList = this.characters.map(this.renderCharacter);

        return html`
        <div class="characterDiv">${characterList}</div>
    `;
    }

    static styles = [reset.styles,
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
        if (this.src) this.hydrate(this.src);
    }

    hydrate(src: string) {
        fetch(src)
            .then(res => res.json())
            .then((json: object) => {
                if(json) {
                    const charId = json as Array<Character>;
                    this.characters = charId;
                }
            })
    }
    renderCharacter(dest: Character){
        return html`
            <character-element href=${dest.playerLink} src=${dest.pfpLink}>
                <p slot="characterName">
                    ${dest.characterName}
                </p>
                <p slot="class">
                    ${dest.class}
                </p>
                <p slot="race">
                    ${dest.race}
                </p>
                <p slot="playerName">
                    ${dest.playerName}
                </p>
            </character-element>`
    }
}

interface Character {
    characterName: string;
    pfpLink: string;
    class: string;
    race: string;
    playerName: string;
    playerLink: string;
}