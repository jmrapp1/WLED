import {Color, ColorPalette} from "../types/types";


export function colorToRgbString(color: Color) {
    return `rgb(${color.r},${color.g},${color.b}) ${color.a}%`;
}

export function colorPaletteToGradient(palette: ColorPalette) {
    return `linear-gradient(to right,${palette.colors.map(colorToRgbString).join()})`
}
