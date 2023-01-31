import Tour from "./Tour";
import TourStartElement from "./themes/component/TourStartElement";
import TourInfoBoxComponent from "./themes/component/TourInfoBoxComponent";
import BootstrapTheme from "./themes/bootstrap/BootstrapTheme";

class TourJs extends Tour {
    static getInstance() {

    }
}

customElements.define('tour-info', TourInfoBoxComponent);
customElements.define('tour-start', TourStartElement);

export default TourJs;
export {BootstrapTheme};
