import{a as l,x as c,d as p,b as d}from"./lit-element-BeeCytRh.js";import{r as m,n as u}from"./state-B1cPsSqc.js";var f=Object.defineProperty,n=(i,s,t,r)=>{for(var e=void 0,a=i.length-1,h;a>=0;a--)(h=i[a])&&(e=h(s,t,e)||e);return e&&f(s,t,e),e};class o extends l{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return c`
            <form
                    @change=${s=>this.handleChange(s)}
                    @submit=${s=>this.handleSubmit(s)}
            >
                <slot></slot>
                <slot name="button">
                    <button
                            ?disabled=${!this.canSubmit}
                            type="submit">
                        <slot name="button-label">Login</slot>
                    </button>
                </slot>
                <p class="error">${this.error}</p>
            </form>
        `}handleChange(s){const t=s.target,r=t==null?void 0:t.name,e=t==null?void 0:t.value,a=this.formData;switch(r){case"username":this.formData={...a,username:e};break;case"password":this.formData={...a,password:e};break}}handleSubmit(s){s.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200&&t.status!==201)throw"Login failed";return t.json()}).then(t=>{const{token:r}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:r,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}}n([m()],o.prototype,"formData");n([u()],o.prototype,"api");n([u()],o.prototype,"redirect");n([m()],o.prototype,"error");p({"mu-auth":d.Provider,"login-form":o});
