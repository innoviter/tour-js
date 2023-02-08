import TourJs from "../Tour.js";

export default class TourStartElement extends HTMLElement {
    constructor() {
        super();

        this.apiEndpoint = this.getAttribute('api');
        this.addEventListener('click', (e) => {
            this.fetch();
        });
    }

    fetch() {
        fetch(this.apiEndpoint, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                globalThis.webtour = new TourJs(data);

                webtour.start();
            });
    }

    static get observedAttributes() {
        return ['api'];
    }

    attributeChangedCallback(name, oldvalue, newValue) {

    }
}
