import {Entities} from "./Entities";

export class Ball extends Entities {
    private stepX: number = 5;
    private stepY: number = 5;
    constructor(
        canvas: HTMLCanvasElement,
        canvasCtx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        color: string) {
        super(canvas,canvasCtx,x,y,width,height,color);
    }

    move(): void {
        if (this.y + this.stepY > this.canvas.height - this.height || this.y < 1) {
            this.stepY = -this.stepY;
        }
        if (this.x + this.stepX > this.canvas.width - this.width || this.x < 1) {
            this.stepX = -this.stepX;
        }

        this.y += this.stepY;
        this.x += this.stepX;
    }
}
