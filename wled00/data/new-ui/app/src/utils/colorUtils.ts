import {Color, ColorPalette} from "../types/types";


export function colorToRgbString(color: Color, alphaOverride: number = undefined) {
    return `rgba(${color.r},${color.g},${color.b},${alphaOverride !== undefined ? alphaOverride : color.a})`;
}

export function colorPaletteToGradient(palette: ColorPalette, alphaOverride: number = 1) {
    return `linear-gradient(to right,${palette.colors.map(c => colorToRgbString(c, alphaOverride)).join()})`
}

export function colorPaletteToVerticalGradient(palette: ColorPalette, alphaOverride: number = 1) {
    return `linear-gradient(to top,${palette.colors.map(c => colorToRgbString(c, alphaOverride)).join()})`
}
