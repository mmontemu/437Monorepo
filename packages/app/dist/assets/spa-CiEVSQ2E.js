import{i as c,a as g,d as h,f as k,x as n,b as C,h as M,_ as x}from"./lit-element-BeeCytRh.js";import{n as d,r as R}from"./state-B1cPsSqc.js";const D=c`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  ul,
  menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }
`,N={styles:D};var P=Object.defineProperty,$=(a,e,r,w)=>{for(var t=void 0,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=o(e,r,t)||t);return t&&P(e,r,t),t};const p=class p extends g{constructor(){super(...arguments),this.title="Home",this.mode="view"}get src(){return`/api/character/${this.userid}`}render(){return n`
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
    `}};p.uses=h({"mu-form":k.Element}),p.styles=[N.styles,c`
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
        `];let l=p;$([d({type:String,reflect:!0})],l.prototype,"title");$([d()],l.prototype,"mode");h({"nav-bar":l});h({"mu-auth":C.Provider});var L=Object.defineProperty,v=(a,e,r,w)=>{for(var t=void 0,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=o(e,r,t)||t);return t&&L(e,r,t),t};const m=class m extends g{constructor(){super(...arguments),this.mode="view",this.character={characterName:"",pfpLink:"",class:"",race:"",playerName:"",playerLink:""}}get src(){return`/api/characters/${this.charid}`}async updated(e){if(e.has("charid")&&this.charid){const r=await fetch(this.src,{headers:{"Content-Type":"application/json"}});r.ok?this.character=await r.json():console.log("invalid get: error code ")}}render(){return n`
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
    `}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,detail:{title:"Profile"}}))}};m.uses=h({"mu-form":k.Element}),m.styles=[c`* {
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
        `];let s=m;v([d({attribute:"charid"})],s.prototype,"charid");v([d()],s.prototype,"mode");v([R()],s.prototype,"character");const y=class y extends g{render(){return n`
            <h2>Welcome to R&D&D!</h2>
            <h3>A Website for D&D Resources</h3>
            <p>You can generate a random D&D character using the link on the top of the page!</p>
    `}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,detail:{title:"Home"}}))}};y.styles=[c` 
        * {
            margin: 0;
            text-align:center;
            list-style-type:none;
        }
        `];let f=y;var G=Object.defineProperty,_=(a,e,r,w)=>{for(var t=void 0,i=a.length-1,o;i>=0;i--)(o=a[i])&&(t=o(e,r,t)||t);return t&&G(e,r,t),t};const b=class b extends g{constructor(){super(...arguments),this.class=this.getRandomClass()}render(){return n`
            <div class="characterGenerator">
            <h1>Welcome to the Random D&D Character Generator:</h1>
            <p>Today, you will play a ${this.getRandomQuirk()} ${this.getRandomRace()} ${this.getRandomClass()}.</p>
            <p>Your alignment is ${this.getRandomAlignment()}.</p>
            <p>Your stats are:</p>
            <ul>
                <li>Strength: ${Math.floor(Math.random()*12+6)}</li>
                <li>Dexterity: ${Math.floor(Math.random()*12+6)}</li>
                <li>Constitution: ${Math.floor(Math.random()*12+6)}</li>
                <li>Wisdom: ${Math.floor(Math.random()*12+6)}</li>
                <li>Intelligence: ${Math.floor(Math.random()*12+6)}</li>
                <li>Charisma: ${Math.floor(Math.random()*12+6)}</li>
            </ul>
            <button onClick="window.location.reload();">Generate New Character</button>
            </div>
    `}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,detail:{title:"Character Generator"}}))}getRandomRace(){let e=["Dwarf","Elf","Human","Tiefling","Dragonborn","Halfling"];return e[Math.floor(Math.random()*e.length)]}getRandomClass(){let e=["Artificer","Bard","Barbarian","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];return e[Math.floor(Math.random()*e.length)]}getRandomQuirk(){let e=["Boisterous","Friendly to a Fault","Mean","Very Mean","Very Very Mean","Goody-two-shoes","Criminal Mastermind","Braniac","Dumb as Rocks","Die-Throwing Degenerate Gambler","Wimpy","Jacked","Personality-less"];return e[Math.floor(Math.random()*e.length)]}getRandomAlignment(){let e=["Lawful Good","Lawful Neutral","Lawful Evil","Neutral Good","True Neutral","Neutral Evil","Chaotic Good","Chaotic Neutral","Chaotic Evil"];return e[Math.floor(Math.random()*e.length)]}};b.styles=[c` 
        * {
            margin: 0;
        }
        .characterGenerator {
            text-align:center;
            list-style-type:none;
        }
        `];let u=b;_([d()],u.prototype,"class");const j=[{path:"/app/character/:username",view:a=>n`
      <profile-view charid="${a.username}"></profile-view>
    `},{path:"/app",view:()=>n`
      <home-view></home-view>
    `},{path:"/app/random-char-gen",view:()=>n`
      <rand-gen-view></rand-gen-view>
    `},{path:"/",redirect:"/app"}];h({"mu-auth":C.Provider,"mu-history":M.Provider,"mu-switch":class extends x.Element{constructor(){super(j,"rndnd:history","rndnd:auth")}},"rand-gen-view":u,"home-view":f,"profile-view":s});document.body.addEventListener("update-title",a=>{const{title:e}=a.detail,r=document.querySelector("nav-bar");r&&r.setAttribute("title",e)});
