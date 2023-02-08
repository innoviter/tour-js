export default class Slide {
    constructor({id, title, content, attachTo, type, direction, url, order}) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.attachTo = attachTo;
        this.type = type;
        this.direction = direction;
        this.url = url;
        this.order = order;
    }
}