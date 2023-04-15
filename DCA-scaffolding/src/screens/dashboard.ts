import {getData} from '../services/getData'
import { cardAttributes } from '../components/card/card';
import '../types/apiType'
import "../components/export"
import ApiType from '../types/apiType';

class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        data.forEach((e: ApiType) => {
            const card = this.ownerDocument.createElement('app-card');
            card.setAttribute(cardAttributes.category, e.category);
            card.setAttribute(cardAttributes.icon_url,e.icon_url);
            card.setAttribute(cardAttributes.value,e.value);
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard',Dashboard);