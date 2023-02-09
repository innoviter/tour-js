### Tour Info Box
```html
<tour-info visibility="hide" style="display: none"></tour-info>
```
`tour-info` tag should not have any space or other html inside it. If you want to override
the default theme then you can add your HTML template here.

This box will show the current tour title, description with Next and Previous button . In additional to that
Tour cancel and completed button too.
### Theme
By default, It comes with FloatingUITheme. But you are free to implement on your own theme as well.


#### Custom Themes
You need to extend from `Theme` class like below

```javascript
import TourJs from "TourJs";
import {Theme,Slide} from "TourJs";

export default class MyCustomTheme extends Theme {
    constructor(tour) {

    }
    /**
     * When tour started all of the current page slides will be passed in this method.
     * You need to bind this slides into the DOM
     * @param Slide[] slides
     */
    bindToUi(slides) {
    }

    /**
     * When user click Next Or Previous Slide. Current Slide provided here. 
     * You need to show the Slide on the Page
     * @param Slide slide
     */
    show(slide) {
    }
    
    /**
     * Before shown to current slide. Previously shown slide must be hide. 
     * You need to hide the currently shown slide. because user click next/prev button.
     * @param Slide slide
     */
    hide(slide) {
    }
}

TourJs.setTheme(MyCustomTheme);

```
You can customize Slide class as well. If you want to manipulate your data before it send to 

```javascript
import TourJs from "TourJs";
import {Slide} from "TourJs";

class MySlide extends Slide {
    constructor({id, title, content, attachTo, type, direction, url, order}) {
        super({id, title, content, attachTo, type, direction, url, order});
        //do your own work here.
        //Your Slide data structure may be different. Here is the place to adjust it and pass
    }
    
}

TourJs.setSlide(MySlide);
```
### Custom Components
There are few custom web components that you can use on your own theme.
1. TourInfoBoxElement ```<tour-info visibility="show|hide"></tour-into>```
2. TourStartElement ``` <tour-start  api="..."></tour-start>```
3. TourSlideElement ```<tour-slide id="" data-slide-id="" data-title="" data-content=""></tour-slide>```
4. TourButtonElement ```<tour-button role="(next|previous)"></tour-button>```
5. CounterElement ```<tour-counter></tour-counter>```
