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
Your API must be in the same format.
You does not have an API. No worries. You can create a json file in your project public folder. 
and then add this file like `api="getting-started-tour.json`
See our example api response json file here.

### Tour Info Box
```html
<tour-info visibility="hide" style="display: none"></tour-info>
```
`tour-info` tag should not have any space or other html inside it. If you want to override
the default theme then you can add your HTML template here.

This box will show the current tour title, description with Next and Previous button . In additional to that
Tour cancel and completed button too. 
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