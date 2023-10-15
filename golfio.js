import Addtext from "./src/Text/AddText.js";
import Removetext from "./src/Text/RemoveText.js";
import Generateletter from "./src/Text/GenerateLetter.js";
import Generatenumber from "./src/Text/GenerateNumber.js";
import Addsprite from "./src/Sprite/AddSprite.js";
import Removesprite from "./src/Sprite/RemoveSprite.js";
import Playsound from "./src/Sound/PlaySound.js";
let textArray = [];
class Golfio {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.sprites = [];
  }
  
  playSound(path,loop) {
    const PlaySound = new Playsound();
    return PlaySound.playSound(path, loop);
  }

  generateNumber(number) {
    const GenerateNumber = new Generatenumber();
    return GenerateNumber.generateNumber(number);
  }

  generateLetter(letter) {
    const GenerateLetter = new Generateletter();
    return GenerateLetter.generateLetter(letter);
  }

  addText(left, top, fontfamily, fontsize, text) {
    const AddText = new Addtext();
    AddText.addText(left, top, fontfamily, fontsize, text);
  }

  removeText(text) {
    const RemoveText = new Removetext();
    RemoveText.removeText(text);
  }

  addSprite(sprite) {
    const AddSprite = new Addsprite();
    AddSprite.addSprite(sprite, this.sprites);
  }

  removeSprite(sprite) {
    const RemoveSprite = new Removesprite();
    RemoveSprite.removeSprite(sprite, this.sprites);
  }

  update(dt) {
    for (const sprite of this.sprites) {
      sprite.update(dt);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const sprite of this.sprites) {
      sprite.render(this.ctx);
    }
  }

  start() {
    let lastTime = performance.now();
    const loop = (currentTime) => {
      const dt = currentTime - lastTime;
      this.update(dt);
      this.render();
      lastTime = currentTime;
    };
  }
}

export default Golfio;