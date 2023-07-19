import Engine from './engine.js';
import Snake from './snake.js';
import Point from './point.js';

const canvas = document.getElementById('game');
const engine = new Engine(canvas);

const snake = new Snake(950, 465, 20);
snake.body.push({ x: 80, y: 100 });
snake.body.push({ x: 60, y: 100 });
snake.body.push({ x: 40, y: 100 });

spawnPoint();

engine.addSprite(snake);
engine.start();

let score = 0;
let scoreText = "Score: " + score;
engine.addText('30px', '40px', 'Aerial, sans-serif', '20px', scoreText);

function spawnPoint() {
  const point = new Point(Math.random() * 1880, Math.random() * 910, 15);
  point.body.push({ x: point.x, y: point.y });
  engine.addSprite(point);
}

function resetScore() {
  engine.removeText("Score: " + score);
  score = 0;
  scoreText = "Score: " + score;
  engine.addText('30px', '40px', 'Aerial, sans-serif', '20px', scoreText);
}

setInterval(() => {
  const point = engine.sprites.find(sprite => sprite instanceof Point);
  if (!point) {
    return;
  }
  const distance = Math.sqrt(Math.pow(point.body[point.body.length - 1].x - snake.x, 2) + Math.pow(point.body[point.body.length - 1].y - snake.y, 2));
  if (distance < snake.size / 2) {
    engine.removeSprite(point);
    spawnPoint();
    score++;
    scoreText = "Score: " + score;
    engine.removeText("Score: " + (score - 1));
    engine.addText('30px', '40px', 'Aerial, sans-serif', '20px', scoreText);
  }
  if (snake.x >= canvas.width || snake.x < 0 || snake.y >= canvas.height || snake.y < 0) {
    snake.x = 950;
    snake.y = 465;
    snake.gamestat = 'nostart';
    engine.removeSprite(point);
    spawnPoint();
    resetScore();
  }
}, 1000 / 60);

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      snake.direction = 'left';
      if (snake.gamestat == 'nostart') {
        snake.gamestat = 'start';
      }
      break;
    case 'ArrowRight':
      snake.direction = 'right';
      if (snake.gamestat == 'nostart') {
        snake.gamestat = 'start';
      }
      break;
    case 'ArrowUp':
      snake.direction = 'up';
      if (snake.gamestat == 'nostart') {
        snake.gamestat = 'start';
      }
      break;
    case 'ArrowDown':
      snake.direction = 'down';
      if (snake.gamestat == 'nostart') {
        snake.gamestat = 'start';
      }
      break;
  }
});