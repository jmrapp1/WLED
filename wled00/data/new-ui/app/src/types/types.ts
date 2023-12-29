export interface Effect {

}

export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface ColorPalette {
    id: string;
    name: string;
    colors: Color[];

}

export interface ColorSolid extends Color {

}

export interface Light {
    on: boolean;
    brightness: number;
    temperature: number;
    effect: Effect;
    color: Color;
}
