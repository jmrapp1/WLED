import {create} from "zustand";
import {createColorPalettesStore} from "./store/colorPalettes";
import {createConfigsStore} from "./store/configs";
import {AppState} from "./types";
import {createEffectsStore} from "./store/effects";
import {createLightsStore} from "./store/light";


export const useBoundStore = create<AppState>((...a) => ({
    ...createColorPalettesStore(...a),
    ...createConfigsStore(...a),
    ...createEffectsStore(...a),
    ...createLightsStore(...a),
}));
