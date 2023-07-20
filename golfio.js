let textArray = [];
class Golfio {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.sprites = [];
  }

  addButton(width, height, top, left, backgroundColor, borderRadius) {
    return new Promise((resolve) => {
      const button = document.createElement('button');
      button.style.width = width;
      button.style.height = height;
      button.style.top = top;
      button.style.left = left;
      button.style.backgroundColor = backgroundColor;
      button.style.borderRadius = borderRadius;

      button.addEventListener('click', () => {
        resolve(true);
      });

      const container = document.getElementById('container');
      container.appendChild(button);
    });
  }

  pressedKey(key, callback) {
    document.addEventListener('keydown', (event) => {
      if (event.key === key) {
        callback(true);
      }
    });
  }

  generateNumber(number) {
    const min = Math.pow(10, longueur - 1);
    const max = Math.pow(10, longueur) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateLetter(letter) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let mot = '';
    for (let i = 0; i < longueur; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      mot += caracteres.charAt(randomIndex);
  }

    return mot;
  }

  addText(left, top, fontfamily, fontsize, text) {
    const textContainer = document.createElement('div');
    textContainer.style.position = 'absolute';
    textContainer.style.fontFamily = fontfamily;
    textContainer.style.left = left;
    textContainer.style.top = top;
    textContainer.style.fontSize = fontsize;
    textContainer.id = textArray.length;
    textArray.push(textContainer);
    document.body.appendChild(textContainer);

    textContainer.innerHTML = text;
  }

  removeText(text) {
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i].innerHTML === text) {
        document.body.removeChild(textArray[i]);
        textArray.splice(i, 1);
      }
    }
  }

  addSprite(sprite) {
    this.sprites.push(sprite);
  }

  removeSprite(sprite) {
    const index = this.sprites.indexOf(sprite);
    if (index !== -1) {
      this.sprites.splice(index, 1);
    }
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
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

export default Golfio;