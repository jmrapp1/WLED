import {Color, ColorPalette} from "../types/types";


export function colorToRgbString(color: Color, darkenByPercent: number = 0) {
    const darken = 255 * darkenByPercent;
    return `rgb(${color.r - darken},${color.g - darken},${color.b - darken}) ${color.a}%`;
}

export function colorPaletteToGradient(palette: ColorPalette, darken = 0) {
    return `linear-gradient(to right,${palette.colors.map(c => colorToRgbString(c, darken)).join()})`
}

export function colorPaletteToVerticalGradient(palette: ColorPalette, darken: number = 0) {
    return `linear-gradient(to top,${palette.colors.map(c => colorToRgbString(c, darken)).join()})`
}
