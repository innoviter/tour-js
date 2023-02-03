export default class Theme {
    addAttributes(slide) {
        document.querySelector(slide.attachTo).setAttribute('data-bs-toggle', slide.type);
        document.querySelector(slide.attachTo).setAttribute('data-bs-placement', slide.direction);
        document.querySelector(slide.attachTo).setAttribute('data-bs-title', slide.title);
        //   document.querySelector(slide.attachTo).setAttribute('data-bs-content', slide.content);
        document.querySelector(slide.attachTo).setAttribute('data-bs-id', slide.id);
        document.querySelector(slide.attachTo).setAttribute('data-bs-index', slide.order);

    }

    addElement(slide) {
        let tourSlide = document.createElement('tour-slide');
        tourSlide.setAttribute('data-title', slide.title);
        tourSlide.setAttribute('data-content', slide.content);
        tourSlide.setAttribute('id', "tour-slide-" + slide.id);
        tourSlide.setAttribute('data-slide-id', slide.id);
        tourSlide.setAttribute('data-index', slide.order);
        tourSlide.setAttribute('data-type', slide.type);
        tourSlide.style.display = 'none';
        let target = document.querySelector(slide.attachTo);
        if (target) {
            target.parentNode.append(tourSlide)
        }

    }
}