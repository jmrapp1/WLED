import {StateCreator} from "zustand";
import {AppState, LightsStore} from "../types";
import {sendCommand} from "../comms";
import {sleep} from "../../utils/utils";

async function fetchLightState(state: AppState) {
    return sendCommand(undefined, state);
}

async function setState(state: any, set: any) {
    set({
        lightState: state.state,
        lightInfo: state.info,
    });
}

async function setBrightness(brightness: number, updateState: boolean, state: AppState) {
    await sendCommand({
        bri: brightness
    }, state, updateState);
}

async function setOn(on: boolean, state: AppState) {
    return sendCommand({
        on
    }, state);
}

export const createLightsStore: StateCreator<AppState, [], [], LightsStore> =
    (set, get) => ({
        wsConnection: {
            useWs: false,
            ws: undefined
        },
        setLightState: (state) => setState(state, set),
        fetchLightState: async () => setState(await fetchLightState(get()), set),
        setBrightness: async (brightness, updateState = true) => setBrightness(brightness, updateState, get()),
        setOn: async (enabled) => setOn(enabled, get()),
    });
