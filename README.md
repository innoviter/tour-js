# Website Guided Tour

### How to Install
### via npm
``` 
npm install @cysense-hq/tourjs --save
```
### via CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@cysense-hq/tourjs/dist/tourjs.js" defer></script>
```
![cysense-hq-website-guided-tour-demo](https://user-images.githubusercontent.com/6059541/217733066-6ed7759e-d288-4e40-9e49-83715de982e0.gif)


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

### Read our Documentation for more
1. [Theme Customization](Theme.md)
2. [API data format](APIFormat.md)
3. [Event](Event.md)



