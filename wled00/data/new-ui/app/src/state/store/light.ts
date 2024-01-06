import {StateCreator} from "zustand";
import {AppState, LightsStore} from "../types";
import {sendCommand} from "../comms";
import {Light, Segment} from "../../types/light";

async function fetchLightState(state: AppState) {
    return sendCommand(undefined, state);
}

async function setState(lightState: Light, set: any, appState: AppState) {
    lightState.state.seg.forEach(seg => {
        if (seg.fx) {
            seg.activeEffect = appState.effects.find(e => e.id === seg.fx);
        }
        if (seg.pal) {
            seg.activePalette = appState.colorPalettes.find(p => p.id === seg.pal);
        }
    })
    set({
        lightState: lightState.state,
        lightInfo: lightState.info,
    });
}

async function setBrightness(brightness: number, updateState: boolean, state: AppState) {
    await sendCommand({
        bri: brightness
    }, state, updateState);
}

async function setSegmentBrightness(segment: Segment, brightness: number, updateState: boolean, state: AppState) {
    await sendCommand({
        seg: {
            id: segment.id,
            bri: brightness
        }}, state, updateState);
}

async function setSegmentSelected(segment: Segment, selected: boolean, state: AppState) {
    await sendCommand({
        seg: {
            id: segment.id,
            sel: selected
        }}, state);
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
        setLightState: (state) => setState(state, set, get()),
        fetchLightState: async () => setState(await fetchLightState(get()), set, get()),
        setBrightness: async (brightness, updateState = true) => setBrightness(brightness, updateState, get()),
        setSegmentBrightness: async (segment, brightness, updateState = true) => setSegmentBrightness(segment, brightness, updateState, get()),
        setSegmentSelected: async (segment, selected) => setSegmentSelected(segment, selected, get()),
        setOn: async (enabled) => setOn(enabled, get()),
    });
