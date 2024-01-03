import {Color, ColorPalette, Effect, WebsocketConnection} from "../types/types";
import {LightInfo, LightState} from "../types/light";

export interface ColorPalettesStore {
    colorPalettes: ColorPalette[],

    // actions
    fetchColorPalettes: () => Promise<void>
    setPalette: (palette: ColorPalette) => Promise<void>
}

export interface ConfigsStore {
    lightIp: string | undefined;

    // actions
    fetchLightIp: () => Promise<void>;
}

export interface EffectsStore {
    effects: Effect[];

    // actions
    fetchEffects: () => Promise<void>;
    setEffect: (effect) => Promise<void>;
}

export interface LightsStore {
    lightInfo?: LightInfo;
    lightState?: LightState;
    wsConnection: WebsocketConnection;

    // actions
    fetchLightState: () => Promise<void>;
    setLightState: (state) => void;
    setBrightness: (brightness: number, updateState?: boolean) => Promise<void>;
    setOn: (enabled: boolean) => Promise<void>;
}

export type AppState = ColorPalettesStore & ConfigsStore & EffectsStore & LightsStore;
