import Tour from "./Tour.js";
import TourStartElement from "./component/TourStartElement.js";
import TourInfoBoxElement from "./component/TourInfoBoxElement.js";
import TourButtonElement from "./component/TourButtonElement.js";
import TourSlideElement from "./component/TourSlideElement.js";
import CounterElement from "./component/CounterElement.js";

class TourJs extends Tour {
    static getInstance() {

    }
}

document.addEventListener('keyup', (e) => {

    if (typeof webtour !== undefined) {
        if (e.key === 'ArrowRight' && webtour.hasNext()) {
            webtour.next();
        } else if (e.key === 'ArrowLeft' && webtour.hasPrevious()) {
            webtour.previous();
        }
    }
});
document.addEventListener('DOMContentLoaded', (e) => {
    if (TourJs.isOnTour()) {
        globalThis.webtour = TourJs.resume();
    }
});

customElements.define('tour-info', TourInfoBoxElement);
customElements.define('tour-start', TourStartElement);
customElements.define('tour-button', TourButtonElement);
customElements.define('tour-slide', TourSlideElement);
customElements.define('tour-counter', CounterElement);

export default TourJs;
