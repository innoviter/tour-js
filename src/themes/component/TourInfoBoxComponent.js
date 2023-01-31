export default class TourInfoBoxComponent extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {

    }

    static get observedAttributes() {
        return ['currentIndex', 'tour-id'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    disconnectedCallback() {

    }
}