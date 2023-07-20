# Golfio
Simple GameEngine written in NodeJS by KaxYum

# Install Golfio
```
npm i golfio
```

# Start the engine
```js
const golfio = require("golfio");

golfio.start();
```

# Add and Remove a Sprite
```js
const golfio = require("golfio");

golfio.addSprite(sprite);
golfio.removeSprite(sprite);
```

# Add and Remove a Text
```js
const golfio = require("golfio");

golfio.addText(left, top, fontfamily, fontsize, text);
golfio.removeText(text);
```

# Create a simple canva and load a file.js
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
  <canvas id="game" width="300" height="300"></canvas>
  <script type="module" src="file.js"></script>
</body>

</html>
```

# Add a fontfamily for the texts
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}
```
