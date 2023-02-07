import Theme from "../Theme";
import {
    computePosition, flip, shift, offset, arrow,
} from "@floating-ui/dom";

export default class FloatingUITheme extends Theme {
    constructor(tour) {
        super();
        this.visibleItem = undefined;
    }

    bindToUi(slides) {
        slides?.forEach((slide, k) => {
            this.addElement(slide);
        });
    }

    show(slide) {
        let button = document.querySelector(slide.attachTo);
        let tooltip = this.visibleItem = document.querySelector('#tour-slide-' + slide.id);
        let arrowElement = document.querySelector('#arrow-tour-slide-' + slide.id);
        tooltip.style.display = 'block';
        console.log(slide.direction);
        computePosition(button, tooltip, {
            placement: 'bottom',
            middleware: [offset(6), flip(), shift({padding: 5}), arrow({element: arrowElement}),],
        }).then(({x, y, placement, middlewareData}) => {
            Object.assign(tooltip.style, {
                left: `${x}px`, top: `${y}px`,
            });
            const {x: arrowX, y: arrowY} = middlewareData.arrow;
            const staticSide = {
                top: 'bottom', right: 'left', bottom: 'top', left: 'right',
            }[placement.split('-')[0]];

            Object.assign(arrowElement.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [staticSide]: '-4px',
            });
        });
    }

    hide(slide) {
        if (this.visibleItem) {
            this.visibleItem.style.display = 'none'
        }
    }
}