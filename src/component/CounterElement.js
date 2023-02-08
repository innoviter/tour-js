import KeyValueStorage from "../KeyValueStorage";
import Tour from "../Tour";

export default class CounterElement extends HTMLElement {
    constructor() {
        super();
        this.updateCounter();
        Tour.EventTarget.addEventListener('nextSlide', (e) => {
            this.updateCounter();
        });
        Tour.EventTarget.addEventListener('previousSlide', (e) => {
            this.updateCounter();
        });
    }

    static get observedAttributes() {
        return ['currentIndex'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'currentIndex') {
            this.updateCounter();
        }
    }

    connectedCallback() {
        this.updateCounter();
    }

    updateCounter() {
        let tour = JSON.parse(KeyValueStorage.get(Tour.STORAGE_TOUR_INFO_KEY));
        let tracking = JSON.parse(KeyValueStorage.get(Tour.STORAGE_TOUR_TRACKING_KEY));
        let currentIndex = parseInt(tracking?.currentSlideIndex) + parseInt(1);
        let totalSlide = tour.slides.length
        this.innerHTML = `<span><b>${currentIndex}</b>/<b>${totalSlide}</b></span>`;
    }
}