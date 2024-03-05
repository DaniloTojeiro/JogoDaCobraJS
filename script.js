// Definir o tamanho do grid e a largura de cada quadrado
const gridSize = 20;
const squareSize = 20;

// Crie um canvas para desenhar
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Defina as coordenadas da cobra e o movimento inicial
let snake = [{ x: 5, y: 5 }];
let direction = { x: 1, y: 0 };

// Desenhe a cobra e a comida
function draw() {
  // Limpe o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhe a cobra
  ctx.fillStyle = "green";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(
      snake[i].x * gridSize,
      snake[i].y * gridSize,
      squareSize,
      squareSize
    );
  }

  // Desenhe a comida
  ctx.fillStyle = "red";
  ctx.fillRect(
    food.x * gridSize,
    food.y * gridSize,
    squareSize,
    squareSize
  );
}

// Atualize a posição da cobra
function update() {
  // Adicione a nova posição da cabeça da cobra
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head);

  // Verifique se a cobra comeu a comida
  if (head.x === food.x && head.y === food.y) {
    // Adicione um novo pedaço à cobra
    generateFood();
  } else {
    // Remova a última peça da cauda
    snake.pop();
  }
}

// Gere a posição aleatória da comida
function generateFood() {
  food = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };
}

// Mova a cobra com as teclas de seta
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      direction = { x: 1, y: 0 };
      break;
    case "ArrowUp":
      direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      direction = { x: 0, y: 1 };
      break;
  }
});

// Comece o jogo
let food;
generateFood();
setInterval(() => {
  update();
  draw();
}, 100);
