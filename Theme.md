
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

