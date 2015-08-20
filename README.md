# fnordian:hue

Control your hue lights with meteorjs.

See http://www.developers.meethue.com/documentation/getting-started for details about hue.

## Installation

```bash
meteor add fnordian:hue
```

## Usage

* Instanciate Hue with the bridge ip and username.
* Call setLight(light, state), to set the state of a specific light.
** light: number of your light
** state: state data, as documented at http://www.developers.meethue.com/documentation/getting-started

## Sample

```js
if (Meteor.isServer) {
  var hue = new Hue(BRIDGE_IP, BRIDGE_USERNAME);

  Meteor.methods({
    setLightOn: function(on) {
      hue.setLight(1, {
        on: on
      });
    }
  });
}

if (Meteor.isClient) {
  Template.body.events({
    "click .turnOnButton": function() {
      Meteor.call("setLightOn", true);
    },
    "click .turnOffButton": function() {
      Meteor.call("setLightOn", false);
    }
  })
}
```

```html
<head>
  <title>hue</title>
</head>

<body>
  <button class="turnOnButton">turn on light</button>
  <button class="turnOffButton">turn off light</button>
</body>
```
