import {Entities} from "./Entities";

export class Paddle extends Entities {
    private upPressed: boolean;
    private downPressed: boolean;
    private isRealPlayer: boolean;

    constructor(
        canvas: HTMLCanvasElement,
        canvasCtx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        color: string,
        isRealPlayer: boolean) {
        super(canvas,canvasCtx,x,y,width,height,color);
        this.isRealPlayer = isRealPlayer;
    }

    keyDownHandler(e: any) {
        // 38 - arrow up
        if(e.keyCode  === 38) {
            this.upPressed = true;
            console.log("Define up pressed", this.upPressed)
        }
        // 40 - arrow down
        else if(e.keyCode == 40) {
            this.downPressed = true;
        }
    }

    keyUpHandler(e: any) {
        // 38 - arrow up
        if(e.keyCode  === 38) {
            this.upPressed = false;
        }
        // 40 - arrow down
        else if(e.keyCode == 40) {
            this.downPressed = false;
        }
    }

    move() {
        if(this.isRealPlayer && this.upPressed) {
            this.x += 7;

            if (this.x + this.height > this.canvas.height){
                this.x = this.canvas.height - this.height;
            }
        }
        else if(this.isRealPlayer && this.downPressed) {
            this.x -= 7;
            if (this.x < 0){
                this.x = 0;
            }
        }
    }
}
