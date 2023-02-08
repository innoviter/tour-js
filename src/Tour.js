import KeyValueStorage from "./KeyValueStorage.js";
import FloatingUITheme from "./themes/FloatingUI/FloatingUITheme.js";
import Slide from "./Slide";

export default class Tour {
    static STORAGE_TOUR_INFO_KEY = 'current_active_tour_info'
    static STORAGE_TOUR_TRACKING_KEY = 'current_active_tour_tracking_info'
    static EventTarget = new EventTarget();

    static theme;

    static themeClass = FloatingUITheme;

    static slideClass = Slide;

    static settings = {
        ENABLE_ARROW_KEYS: true,
        SHOW_INFO_BOX: true
    };

    constructor({id, slug, title, description, status, slides}) {
        this.data = {};
        this.currentSlide = {};
        this.tracking = {
            currentSlideIndex: 0,
            cancelled: false,
            completed: false,
            startedAt: Date.now(),
            endAt: null,
            cancelledAt: null,
            theme: "floatingUI"
        };
        this.data.id = id;
        this.data.slug = slug;
        this.data.title = title;
        this.data.description = description;
        this.data.status = status;
        this.data.slides = slides.sort(this.sorting);

        if (KeyValueStorage.has(Tour.STORAGE_TOUR_TRACKING_KEY)) {
            this.tracking = JSON.parse(KeyValueStorage.get(Tour.STORAGE_TOUR_TRACKING_KEY));
        }

        this.url = new URL(window.location.href);
        this.pageSlides = this.filterAndSort(slides);
        this.dispatch('created', this.data);

    }

    start() {
        let currentSlide = this.data.slides[this.tracking.currentSlideIndex];
        Tour.theme = new Tour.themeClass(this);
        Tour.theme.bindToUi(this.pageSlides.map(slide=>new Tour.slideClass(slide)));

        this.dispatch("started", this.data);

        return this.showOrRedirectTo(currentSlide);
    }

    static setTheme(theme) {
        Tour.themeClass = theme;
    }

    static setSlide(slide) {
        Tour.slideClass=slide;
    }

    next() {
        if (this.hasNext()) {
            Tour.theme.hide(this.currentSlide);
            this.tracking.currentSlideIndex++;
            this.saveChanges();
            let currentSlide = this.current();
            this.dispatch('nextSlide', currentSlide);

            return this.showOrRedirectTo(currentSlide);
        }

    }

    previous() {
        if (this.hasPrevious()) {
            Tour.theme.hide(this.currentSlide);
            this.tracking.currentSlideIndex--;
            this.saveChanges();
            let currentSlide = this.current();
            this.dispatch('previousSlide', currentSlide);

            return this.showOrRedirectTo(currentSlide);
        }
    }

    current() {
        if (this.data.slides.indexOf(this.tracking.currentSlideIndex)) {
            return this.currentSlide = new Tour.slideClass(this.data.slides[this.tracking.currentSlideIndex]);
        } else {
            throw new Error('Out of index');
        }
    }

    complete() {
        this.tracking.completed = true;
        this.tracking.endAt = Date.now();
        Tour.theme.hide(this.current());
        this.saveChanges();
        this.dispatch('completed', this);

        //call API to sent Tour statistics;
        this.deleteRecords();
        return true;
    }

    cancel() {
        this.tracking.cancelled = true;
        this.tracking.cancelledAt = Date.now();
        Tour.theme.hide(this.current());
        this.saveChanges();
        this.dispatch('canceled', this);

        //call API to sent Tour statistics;
        this.deleteRecords();
        return true;
    }

    showOrRedirectTo(slide) {

        this.saveChanges();

        if ([this.url.pathname, this.url.href].includes(slide.url)) {
            Tour.theme.show(slide);
        } else {
            window.location.href = slide.url;
        }
    }

    saveChanges() {
        KeyValueStorage.set(Tour.STORAGE_TOUR_INFO_KEY, JSON.stringify(this.data));
        KeyValueStorage.set(Tour.STORAGE_TOUR_TRACKING_KEY, JSON.stringify(this.tracking));
    }

    deleteRecords() {
        KeyValueStorage.remove(Tour.STORAGE_TOUR_INFO_KEY);
        KeyValueStorage.remove(Tour.STORAGE_TOUR_TRACKING_KEY);
    }

    filterAndSort(slides) {
        return slides?.filter(slide => {
            return [this.url.pathname, this.url.href].includes(slide.url);
        }).sort(this.sorting);
    }

    sorting(a, b) {
        if (a.order === b.order) {
            return 0;
        }
        if (a.order < b.order) {
            return -1
        } else {
            return 1
        }
    }

    static isOnTour() {
        return KeyValueStorage.has(Tour.STORAGE_TOUR_INFO_KEY);
    }

    hasNext() {
        return this.tracking.currentSlideIndex < (this.data.slides.length - 1);
    }

    hasPrevious() {
        return this.tracking.currentSlideIndex > 0;
    }

    static resume() {
        let info = JSON.parse(KeyValueStorage.get(Tour.STORAGE_TOUR_INFO_KEY));
        let webtour = new Tour(info);
        webtour.start();

        return webtour;
    }

    dispatch(eventName, detail) {
        Tour.EventTarget.dispatchEvent(new CustomEvent(eventName, {detail}))
    }

}