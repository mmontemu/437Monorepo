import {css, html, LitElement} from "lit";

export class HomeViewElement extends LitElement {
    render() {
        return html`
            <h2>Welcome to R&D&D!</h2>
            <h3>A Website for D&D Resources</h3>
            <p>You can generate a random D&D character using the link on the top of the page!</p>
    `;
    }

        static styles = [
            css` 
        * {
            margin: 0;
            text-align:center;
            list-style-type:none;
        }
        `];

    connectedCallback() {
        super.connectedCallback();
        this.dispatchEvent(new CustomEvent("update-title", {
            bubbles: true,
            detail: { title: `Home` }
        }));
    }
    // more to come
}