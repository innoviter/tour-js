# Website Guided Tour

### How to Install
``` 
npm install @cysense-hq/tourjs --save
```

### How to start
#### Via Button
Copy this HTML code and paste anywhere. Click on this button will start the tour.
```html
<tour-start class="..." api="/Your-Api-Endpoint" id="...">Start the Tour</tour-start>
```
API here must be publicly available and `GET` method. 

#### Via JavaScript
```javascript
function eventhandler(event) {
    // Your code goes here
    fetch('Your-API-Endpoint').then(response => {
        return response.json();
    }).then(response => {
        globalThis.webtour = new Tourjs(response);
    });
}
```
Your API must be in the same format.
You does not have an API. No worries. You can create a json file in a your project public folder. 
and then add this file like `api="getting-started-tour.json`
See our example api response json file here.

### Theme
#### Default Themes
#### Create your own theme
