
### Theme
By default, It comes with FloatingUITheme. But you are free to implement on your own theme as well.

```javascript
import {BootstrapTheme,FloatingUITheme} from "TourJs";

TourJs.setTheme(BootstrapTheme);
```

#### Custom Themes
You need to extend from `Theme` class like below
```javascript
export default class MyCustomTheme extends Theme {
    constructor(tour) {

    }

    bindToUi(slides) {
    }

    show(slide) {
    }

    hide(slide) {
    }
}
```