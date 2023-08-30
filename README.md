# Golfio
Simple GameEngine written in NodeJS by KaxYum

# Start the engine
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game');
const golfio = new Golfio(canvas);

golfio.start();
```

# Add and Remove a Sprite
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game');
const golfio = new Golfio(canvas);

golfio.addSprite(sprite);
golfio.removeSprite(sprite);
```

# Add and Remove a Text
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game');
const golfio = new Golfio(canvas);

golfio.addText(left, top, fontfamily, fontsize, text);
golfio.removeText(text);
```

# Generate a Numbers or a Letters
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game');
const golfio = new Golfio(canvas);

golfio.generateNumber(number);
golfio.generateLetter(letter);
```

# Play a Sound
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game');
const golfio = new Golfio(canvas);

golfio.playSound(path, loop);
```

# Create a button and execute a code when you clicked on it
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game')
const golfio = new Golfio(canvas);

golfio.addButton(width, height, top, left, backgroundColor, borderRadius).then((isClicked) => {
  if (isClicked) {
    console.log("the button is clicked !");
  }
});
```
# Execute code when you pressed a specific key
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game')
const golfio = new Golfio(canvas);

golfio.pressedKey('Enter').then((isPressed) => {
  if (isPressed) {
    console.log("Enter is pressed !");
  }
});
```

# Create a simple canvas and load a file.js
```html
<!DOCTYPE html>
<html>

<head>
  <style>
    #game {
      border: 1px solid black;
    }
  </style>
</head>

<body>
  <canvas id="game" width="930" height="930"></canvas>
  <script type="module" src="./file.js"></script>
</body>

</html>
```

# Add a font-family for the texts
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}
```