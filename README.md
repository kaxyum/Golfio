# Golfio
Simple GameEngine written in NodeJS by KaxYum

# Start the engine
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game');
const golfio = new Golfio(canvas);

golfio.start();
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

# Add and Remove a Sprite
```js
import Golfio from './Golfio/golfio.js';
const canvas = document.getElementById('game');
const golfio = new Golfio(canvas);

const sprite = new Sprite(300, 300, 20);
sprite.body.push({ x: sprite.x, y: sprite.y });
golfio.addSprite(sprite, golfio.sprites);
golfio.removeSprite(sprite, golfio.sprites);
golfio.render();
```

# Create a Sprite
```js
class Sprite {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.body = [];
    this.image = new Image();
    this.image.src = './sprite.png';
  }

  update(dt) {
    this.body.unshift({ x: this.x, y: this.y });
    this.body.pop();
  }

  render(ctx) {
    this.image.onload = () => {
      for (const segment of this.body) {
        ctx.drawImage(this.image, segment.x, segment.y, this.size, this.size);
      }
    };
  }
}

export default Sprite;
```

# Create a simple canvas and load a file.js
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    #game {
      border: 1px solid black;
    }
  </style>
</head>

<body>
  <div id="container"></div>
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