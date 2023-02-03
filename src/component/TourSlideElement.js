import {TourSlideTemplate} from "./Template";

export default class TourSlideElement extends HTMLElement {
    constructor() {
        super();
    }

    static get observeAttributes() {
        return ['id', 'data-slide-id', 'data-title', 'data-content']
    }

    connectedCallback() {
        this.updateUi();
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }


    render(template, data) {
        return template.replace(/{{(.*?)}}/g, (match) => {
            return data[match.split(/{{|}}/).filter(Boolean)[0].trim()]
        })
    }

    updateUi() {
        let id = this.getAttribute('id');
        let slideId = this.getAttribute('data-slide-id');
        let title = this.getAttribute('data-title');
        let content = this.getAttribute('data-content');
        this.innerHTML = this.render(TourSlideTemplate, {id, slideId, title, content});
    }
}