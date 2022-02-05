import {Ball} from "./Ball";
import {Paddle} from "./Paddle";

const canvas: HTMLCanvasElement = document.createElement("canvas");
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 768;
canvas.style.border = "2px solid black"
document.body.appendChild(canvas);

let paddle1: Paddle = new Paddle(canvas, ctx, 50, canvas.height / 2 - 120, 75, 250, "green", true);
let paddle2: Paddle = new Paddle(canvas, ctx, canvas.width - 125, canvas.height / 2 - 120, 75, 250, "blue", false);
let ball: Ball = new Ball(canvas, ctx, canvas.width / 2, canvas.height / 2 - 120, 45, 45, "red");

document.addEventListener("keydown", paddle1.keyDownHandler, false);
document.addEventListener("keyup", paddle1.keyUpHandler, false);

let lastTime: number;
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let now: number = Date.now();

    ctx.beginPath();
    ctx.rect(canvas.width / 2, 0, 2, 1000);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    paddle1.render();

    paddle2.render();

    ball.render();
    ball.move();

    lastTime = now;
    window.requestAnimationFrame(gameLoop);
}



gameLoop();
