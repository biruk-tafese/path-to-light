declare module "howler" {
  export type HowlOptions = {
    src: string[];
    loop?: boolean;
    volume?: number;
    html5?: boolean;
  };

  export class Howl {
    constructor(options?: HowlOptions);
    play(): number;
    stop(): this;
    fade(from: number, to: number, duration: number): this;
    volume(): number;
    volume(value: number): this;
    playing(): boolean;
  }
}