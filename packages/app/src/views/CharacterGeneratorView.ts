import {css, html, LitElement} from "lit";
import {property} from "lit/decorators.js";

export class CharacterGeneratorViewElement extends LitElement {
    render() {
        return html`
            <div class="characterGenerator">
            <h1>Welcome to the Random D&D Character Generator:</h1>
            <p>Today, you will play a ${this.getRandomQuirk()} ${this.getRandomRace()} ${this.getRandomClass()}.</p>
            <p>Your alignment is ${this.getRandomAlignment()}.</p>
            <p>Your stats are:</p>
            <ul>
                <li>Strength: ${Math.floor(Math.random() * 12 + 6)}</li>
                <li>Dexterity: ${Math.floor(Math.random() * 12 + 6)}</li>
                <li>Constitution: ${Math.floor(Math.random() * 12 + 6)}</li>
                <li>Wisdom: ${Math.floor(Math.random() * 12 + 6)}</li>
                <li>Intelligence: ${Math.floor(Math.random() * 12 + 6)}</li>
                <li>Charisma: ${Math.floor(Math.random() * 12 + 6)}</li>
            </ul>
            <button onClick="window.location.reload();">Generate New Character</button>
            </div>
    `;
    }

    static styles = [
        css` 
        * {
            margin: 0;
        }
        .characterGenerator {
            text-align:center;
            list-style-type:none;
        }
        `];

    @property()
    class = this.getRandomClass();



    connectedCallback() {
        super.connectedCallback();
        this.dispatchEvent(new CustomEvent("update-title", {
            bubbles: true,
            detail: { title: `Character Generator` }
        }));
    }
    getRandomRace() : string {
        let arr: string[] = ["Dwarf", "Elf", "Human", "Tiefling", "Dragonborn", "Halfling"];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    getRandomClass() : string {
        let arr: string[] = ["Artificer", "Bard", "Barbarian", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    // more to come
    getRandomQuirk() {
        let arr: string[] = ["Boisterous", "Friendly to a Fault", "Mean", "Very Mean", "Very Very Mean", "Goody-two-shoes", "Criminal Mastermind", "Braniac", "Dumb as Rocks", "Die-Throwing Degenerate Gambler", "Wimpy", "Jacked", "Personality-less"];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    getRandomAlignment() {
        let arr: string[] = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "True Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
        return arr[Math.floor(Math.random() * arr.length)];
    }
}