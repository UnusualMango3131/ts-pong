export abstract class Entities {
    protected canvas: HTMLCanvasElement;
    protected canvasCtx: CanvasRenderingContext2D;
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected color: string;

    protected constructor(canvas: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D , x: number, y: number, width: number, height: number, color: string) {
        this.canvas = canvas;
        this.canvasCtx = canvasCtx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(): void {
        this.canvasCtx.beginPath();
        this.canvasCtx.rect(this.x, this.y, this.width, this.height);
        this.canvasCtx.fillStyle = this.color;
        this.canvasCtx.fill();
        this.canvasCtx.closePath();
    }

    abstract move(): void;
}
