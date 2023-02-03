class TourSlideElement extends HTMLElement {
    constructor() {
        super();
        this.index = this.getAttribute('index');
    }

    static get observeAttributes() {
        return ['index']
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }


    render(template, data) {
        return template.replace(/{{(.*?)}}/g, (match) => {
            return data[match.split(/{{|}}/).filter(Boolean)[0].trim()]
        })
    }
}