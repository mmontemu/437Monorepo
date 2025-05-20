import { html, css, shadow } from "@calpoly/mustang";

export class RddHeader extends HTMLElement {
    static styles = css`
        .navbar {
            display: flex;
            justify-content:space-between;
            text-align: center;
            align-items: center;
        }
    `
    static template = html`
        <template>
            <div class="navbar">
                <h1 class="title">R&D&D</h1>
                <h2>
                    <slot name="title"">Title Of Campaign</slot>
                </h2>
                <a>
                    Back
                </a>
                <label
                        onchange="relayEvent(event, 'light-mode',
                              {checked: event.target.checked})">
                    <input type="checkbox" autocomplete="off"/>
                    Dark Mode
                </label>
                
                <h2>
                    <slot name="back-button">Back</slot>
                </h2>
                <figure>
                    <h2>
                        <slot name="pfp">
                        <svg class="icon">
                            <use href="/icons/dnd.svg#icon-profile"/>
                        </svg>
                        </slot>
                    </h2>
                    <figcaption>
                        <p>
                            <slot name="username">ProfileName</slot>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </template>
    `;

    constructor() {
        super();
        shadow(this)
            .template(RddHeader.template)
            .styles(RddHeader.styles);
    }

}