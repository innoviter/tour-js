import * as bootstrap from "bootstrap";
import BootstrapType from "./BootstrapType";
import Direction from "../direction";

export default class BootstrapTheme {
    constructor(tour) {
        this.tour = tour;
        this.currentSlide = undefined;
        this.visibleItem;
    }

    bindToUi(slides) {
        slides?.forEach((slide, k) => {
            if ([BootstrapType.Tooltip, BootstrapType.Popover].includes(slide.type)) {
                document.querySelector(slide.attachTo).setAttribute('data-bs-toggle', slide.type);
                document.querySelector(slide.attachTo).setAttribute('data-bs-placement', slide.direction);
                document.querySelector(slide.attachTo).setAttribute('data-bs-title', slide.title);
                //   document.querySelector(slide.attachTo).setAttribute('data-bs-content', slide.content);
                document.querySelector(slide.attachTo).setAttribute('data-bs-id', slide.id);
                document.querySelector(slide.attachTo).setAttribute('data-bs-index', slide.order);

            } else if (slide.type === BootstrapType.Toast) {


                let toastContainer = document.createElement('div');
                let position = this.toastPosition(slide);
                position.push('toast-container', 'p-3');
                toastContainer.classList.add(...position);
                toastContainer.innerHTML = `<div role="alert" aria-live="assertive" aria-atomic="true" id="toast-${slide.id}" class="toast" data-bs-autohide="false">
                         <div class="toast-header">
                                <strong class="me-auto">${slide.title}</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            ${slide.content}
                        </div>
                    </div>`;
                const currentDiv = document.querySelector(slide.attachTo);
                document.body.appendChild(toastContainer);
            }

        });
    }

    show(slide) {
        this.hide(slide);
        const tooltipElement = document.querySelector(slide.attachTo);
        switch (slide.type) {
            case BootstrapType.Tooltip:
                const tooltip = this.visibleItem = new bootstrap.Tooltip(tooltipElement, {
                    html: true, title: () => {
                        return `<h6>${slide.title}</h6>
                                <p>${slide.content}</p>
                                `
                    }
                });
                tooltip.show();
                break;
            case BootstrapType.Popover:
                const popover = this.visibleItem = new bootstrap.Popover(tooltipElement, {
                    html: true, sanitize: false, content: () => {
                        return `<div>
                                   <p>${slide.content}</p>
                                   <div class="d-flex justify-content-between">
                                    <button  class="btn btn-outline-primary tourPreviousSlideBtn" >Previous</button>
                                    <button  class="btn btn-outline-primary tourNextSlideBtn" >Next</button>
                                    </div>
                                </div>`
                    }
                });
                popover.show();
                break;
            case BootstrapType.Toast:
                const toast = this.visibleItem = new bootstrap.Toast(document.getElementById("toast-" + slide.id));
                toast.show();
                break;
            case BootstrapType.Alert:
                let alert = document.createElement('div');
                alert.classList.add(...['alert', 'alert-primary']);
                alert.setAttribute('role', 'alert');
                alert.setAttribute('id', 'alert-slide-' + slide.id);

                break;

        }

    }

    hide(slide) {
        if (this.visibleItem) {
            this.visibleItem.hide();
            this.visibleItem = undefined;
        } else {

        }
    }

    hideTourInfoBox() {
        let tbox = document.getElementById('tourInfoBox');
        if (tbox) {
            tbox.remove();
        }
        if (this.visibleItem) {
            this.visibleItem.hide();
        }
    }

    toastPosition(slide) {
        let cssClass = [];
        switch (slide.direction) {
            case Direction.Top:
                cssClass = ['top-0', 'start-0'];
                break;
            case Direction.Bottom:
                cssClass = ['bottom-0', 'end-0'];
                break;
            case Direction.Left:
                cssClass = ['bottom-0', 'start-0'];
                break;
            case Direction.Right:
                cssClass = ['top-0', 'end-0'];
                break;
            default:
                cssClass = ['bottom-0', 'end-0'];
                break;
        }

        return cssClass;
    }

}

