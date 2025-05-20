import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./scripts/styles/reset.css.ts";
export class CharacterElement extends LitElement {

    @property()
    src?: string;

    @property()
    href?: string;

    override render() {
        return html`
             <h3>
                 <slot name="characterName">Character Name</slot>
             </h3>
             <ul class="playerList">
                 <li class="pfp">
                     <img src=${this.src}
                              alt="playerPhoto">
                 </li>
                 <li>
                         <slot name="class">Sample Class</slot>
                 </li>
                 <li>
                         <slot name="race">Sample Race</slot>
                 </li>
                 <li>
                     <a href=${this.href}><slot name="playerName">Sample Player Name</slot></a>
                 </li>
             </ul>
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
}