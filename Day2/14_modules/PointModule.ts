export interface IPoint {
    getDistance(): number;
}

export class Point implements IPoint {
    constructor(private x: number, private y: number) { }

    getDistance(): number {
        return Math.sqrt(this.x * this.x | this.y * this.y);
    }
}