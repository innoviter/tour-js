import Tour from "../Tour.js";
import KeyValueStorage from "../KeyValueStorage.js";
import {TourInfoTemplate} from "./Template.js";

export default class TourInfoBoxElement extends HTMLElement {
    constructor() {
        super();
        this.tour = {};
        this.tracking = {};
        let visibility = this.getAttribute('visibility');

        if (visibility !== 'show') {
            this.style.display = 'none';
        }
        Tour.EventTarget.addEventListener('completed', (e) => {
            this.setAttribute('visibility', 'hide');
        });
        Tour.EventTarget.addEventListener('canceled', (e) => {
            this.setAttribute('visibility', 'hide');
        });
    }

    connectedCallback() {
        if (KeyValueStorage.has(Tour.STORAGE_TOUR_INFO_KEY)) {
            this.updateUi();
            this.style.display = 'block';
            this.setAttribute('visibility', 'show');
        }
    }

    static get observedAttributes() {
        return ['currentIndex', 'tour-id', 'visibility'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'visibility' && oldValue !== newValue) {
            if (newValue === 'show') {
                this.style.display = 'block';
            } else {
                this.style.display = 'none';
            }
        }
    }

    disconnectedCallback() {

    }

    updateUi() {
        this.tour = JSON.parse(KeyValueStorage.get(Tour.STORAGE_TOUR_INFO_KEY));
        this.tracking = JSON.parse(KeyValueStorage.get(Tour.STORAGE_TOUR_TRACKING_KEY));
        let innerHTML = this.innerHTML.trim().length === 0 ? TourInfoTemplate : this.innerHTML;

        this.innerHTML = this.render(innerHTML, {
            ...this.tour,
            currentIndex: parseInt(this.tracking.currentSlideIndex) + parseInt(1),
            totalSlide: this.tour.slides.length
        });

    }

    render(template, data) {
        return template.replace(/{{(.*?)}}/g, (match) => {
            return data[match.split(/{{|}}/).filter(Boolean)[0].trim()]
        })
    }
}