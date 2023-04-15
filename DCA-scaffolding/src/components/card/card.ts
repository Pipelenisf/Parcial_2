import { jokeAttributes } from "../joke/joke";
import { buttonAttributes } from "../button/button";

export enum cardAttributes{
    'category' = 'category',
    'icon_url' = 'icon_url',
    'value' = 'value'
}

export default class Card extends HTMLElement {
    category: string = '';
    icon_url: string = ''
    value: string = ''


    static get observedAttributes(){

        const attrs: Record<cardAttributes, null> = {
            category: null,
            icon_url: null,
            value: null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    attributeChangedCallback(propName:cardAttributes, _:unknown, newValue:string){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    connectedCallback(){
        this.render()
    }


    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``

        const section = this.ownerDocument.createElement('section');

        const button = this.ownerDocument.createElement("app-button");
        button.setAttribute(buttonAttributes.category, this.category)
        section.appendChild(button);
        
        
        const joke = this.ownerDocument.createElement("app-joke");
        joke.setAttribute(jokeAttributes.icon_url, this.icon_url);
        joke.setAttribute(jokeAttributes.value, this.value);
        section.appendChild(joke);

        this.shadowRoot?.appendChild(section)
    }
}

customElements.define("app-card", Card)