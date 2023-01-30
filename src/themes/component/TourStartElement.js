export default class TourStartElement extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', (e) => {
            console.log('What is that');
        });
    }

    static get observedAttributes() {
        return ['api'];
    }

    attributeChangedCallback(name, oldvalue, newValue) {

    }
}
