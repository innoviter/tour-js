import keyValueStorage from "../../KeyValueStorage";
import Tour from "../../Tour";
import KeyValueStorage from "../../KeyValueStorage";

export default class TourInfoBoxElement extends HTMLElement {
    constructor() {
        super();
        this.tour = {};
        let visibility = this.getAttribute('visibility');

        if (visibility !== 'show') {
            this.style.display = 'none';
        }

        // let dom = document.["tour-info"];
        let previousBtn = document.querySelector(".tourPreviousSlideBtn");
        let nextBtn = document.querySelector(".tourPreviousSlideBtn");
        let cancelBtn = document.querySelector(".tourPreviousSlideBtn");
        let completeBtn = document.querySelector(".tourPreviousSlideBtn");



    }

    connectedCallback() {
        if (keyValueStorage.has(Tour.STORAGE_TOUR_INFO_KEY)) {
            this.tour = JSON.parse(KeyValueStorage.get(Tour.STORAGE_TOUR_INFO_KEY));
            this.innerHTML = this.render(this.innerHTML, this.tour);

            let visibility = this.getAttribute('visibility');
            this.style.display = 'block';
            this.setAttribute('visibility', 'show');
        }
    }

    static get observedAttributes() {
        return ['currentIndex', 'tour-id', 'visibility'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    disconnectedCallback() {

    }

    render(template, data) {
        return template.replace(/{{(.*?)}}/g, (match) => {
            return data[match.split(/{{|}}/).filter(Boolean)[0].trim()]
        })
    }
}