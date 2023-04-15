export enum jokeAttributes {
    'icon_url' = 'icon_url',
    'value' = 'value'
}

export default class Joke extends HTMLElement{

    icon_url?: string;
    value?: string;

    static get observedAttributes(){

        const attrs: Record<jokeAttributes,null> = {
            icon_url: null,
            value: null
        }

        return Object.keys(attrs)
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: jokeAttributes, _: unknown, newValue: string){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
            <img src="${this.icon_url}"></img>
            <p> ${this.value}</p>
        `
    }
}

customElements.define("app-joke", Joke)