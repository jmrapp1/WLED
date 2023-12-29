import {ColorPalette} from "../types/types";

export interface ColorPalettesStore {
    colorPalettes: ColorPalette[],
    fetchColorPalettes: () => Promise<void>
}

export interface ConfigsStore {
    lightIp: string | undefined;
    fetchLightIp: () => Promise<void>;
}

export type AppState = ColorPalettesStore & ConfigsStore;
