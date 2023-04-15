import {getData} from '../../services/getData'

export enum buttonAttributes{
    "category" = "category"
}

export default class Button extends HTMLElement{

    category?: string

    static get observedAttributes(){

        const attrs: Record<buttonAttributes,null> = {
            category: null,
        }

        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName:buttonAttributes, _:unknown, newValue:string){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``
        
        const button = this.ownerDocument.createElement("button")
        button.innerText = `${this.category}`
        button.addEventListener('click', () => {
            button.innerText = `${this.category}`
        })
        this.shadowRoot?.appendChild(button)
        
    }
}

customElements.define("app-button", Button)



