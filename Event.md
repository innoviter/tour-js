

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