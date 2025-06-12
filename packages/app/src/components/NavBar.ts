import { css, html, LitElement } from "lit";
import { define, Form } from "@calpoly/mustang";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";

export class HeaderElement extends LitElement {
    static uses = define({
        "mu-form": Form.Element
    });

    userid?: string;

    @property({ type: String, reflect: true })
    title = "Home";

    @property()
    mode = "view";

    get src() {
        return `/api/character/${this.userid}`;
    }

    protected render() {
        return html`
      <div class="navbar">
        <h1 class="title">R&D&D</h1>
        <a href="/"><h2>${this.title}</h2></a>
        <a href="/login.html">
            <h3>
                Login
            </h3>
        </a>
          <a href="/app/random-char-gen">
              <h3>
                  Random Character Generator
              </h3>
          </a>
        <a href="/app/character/Joshua">
                <figure>
                  <h2>
                    <svg class="pfp"><use href="/icons/dnd.svg#icon-profile" /></svg>
                  </h2>
                  <figcaption>
                    <p>ProfileName</p>
                  </figcaption>
            </figure>
        </a>
      </div>
      <hr />
    `;
    }



    static styles = [
        reset.styles,
        css`
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #21897e;
                position: sticky;
                top: 0;
                color: #202020;
                text-align: center;
            }

            .pfp {
                height: 6vh;
            }
        `
    ];
}