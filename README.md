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

That's all you need to get started. You can skip following if you stick with the defaults.

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
**<font color="red">Warning: variable must be `globalThis.webtour`. Because this global variable is used in other custom web components.</font>**

Your API must be in the same format.
You does not have an API. No worries. You can create a json file in your project public folder. 
and then add this file like `api="getting-started-tour.json`
See our example api response json file here.

1. [Theme Customization](Theme.md)
2. [API data format](APIFormat.md)



### Events
Here is the list of event triggered by this Plugin
1. `created` => when new Instance of TourJs is created.
2. `started` => When tour started
3. `nextSlide` => When next button clicked from Slide panel. 
4. `previousSlide` => When previous button clicked Slide panel.
5. `completed` => When completed button clicked from Tour info box.
5. `canceled` => When completed button clicked from Tour info box.

### How to trigger event
Sometimes you might need to trigger your custom event inside your custom theme.

```javascript
    function myFunc() {
    Tourjs.EventTarget.dispatch('YourCustomEventName', {id: 1});
}
```

### How to listen to an event
```javascript
TourJs.EventTarget.addEventListener('started', (e) => {
    //all of our data is stored in e.detail property.
    console.log(e.detail);
});
```

