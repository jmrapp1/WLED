import {create} from "zustand";
import {createColorPalettesStore} from "./store/colorPalettes";
import {createConfigsStore} from "./store/configs";
import {AppState} from "./types";


export const useBoundStore = create<AppState>((...a) => ({
    ...createColorPalettesStore(...a),
    ...createConfigsStore(...a),
}));
