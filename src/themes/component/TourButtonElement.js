export default class TourButtonElement extends HTMLElement {
    constructor() {
        super();
        this.role = this.getAttribute('role');
        this.attachCallback(this.role);
    }

    static get observedAttributes() {
        return ['role'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && name === 'role') {
       //     this.removeEventListener('click', this.attachCallback);
            this.attachCallback(newValue);
        }
    }

    attachCallback(role) {
        //this.removeEventListener('click');

        if (role === 'previous') {
            this.addEventListener('click', () => {
                if (webtour && webtour.hasPrevious()) {
                    webtour.previous();
                }
            });
        }

        if (role === 'next') {
            this.addEventListener('click', () => {
                if (webtour && webtour.hasNext()) {
                    webtour.next();
                }
            });
        }

        if (role === 'complete') {
            this.addEventListener('click', () => {
                webtour.complete();
            });
        }

        if (role === 'cancel') {
            this.addEventListener('click', () => {
                webtour.cancel();
            });
        }
    }

}