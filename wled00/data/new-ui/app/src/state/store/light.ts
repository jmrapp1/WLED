import {StateCreator} from "zustand";
import {AppState, LightsStore} from "../types";
import {sendCommand} from "../comms";

async function fetchLightState(state: AppState) {
    return sendCommand(undefined, state);
}

async function setState(state: any, set: any) {
    set({
        lightState: state.state,
        lightInfo: state.info,
    });
}

async function setBrightness(brightness: number, state: AppState) {
    return sendCommand({
        bri: brightness
    }, state);
}

export const createLightsStore: StateCreator<AppState, [], [], LightsStore> =
    (set, get) => ({
        lightState: {
            on: false,
            bri: 128,
        },
        lightInfo: {
            arch: ''
        },
        wsConnection: {
            useWs: false,
            ws: undefined
        },
        setLightState: (state) => setState(state, set),
        fetchLightState: async () => setState(await fetchLightState(get()), set),
        setBrightness: async (brightness) => setBrightness(brightness, get()),
    });
