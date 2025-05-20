import { html, css, shadow } from "@calpoly/mustang";

export class Character extends HTMLElement {
    static styles = css`
        .playerList {
            list-style-type: none;
        }
        .pfp {
            img {
                width: 3em;
                height: 3em;
            }
        }
    `
    static template = html`
        <template>
            <h3>
                <slot name="characterName">Character Name</slot>
            </h3>
            <ul class="playerList">
                <li class="pfp">
                    <slot name="characterImage">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                             alt="samplePhoto" />
                    </slot>
                </li>
                <li>
                    <slot name="characterClass">
                        Sample Class
                    </slot>
                </li>
                <li>
                    <slot name="characterRace">
                        Sample Race
                    </slot>
                </li>
                <li>
                    <slot name="PlayerName"> <a href="#">Unknown Player Name</a></slot>
                </li>
            </ul>
        </template>
    `;

    constructor() {
        super();
        shadow(this)
            .template(Character.template)
            .styles(Character.styles);
    }

}