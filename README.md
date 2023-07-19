# Golfio
Simple GameEngine written in NodeJS by KaxYum

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