import {StateCreator} from "zustand";
import {AppState, ConfigsStore} from "../types";

async function fetchLightIp() {
    return "http://wled1.local";
}

export const createConfigsStore: StateCreator<AppState, [], [], ConfigsStore> =
    (set) => ({
        lightIp: undefined,
        fetchLightIp: async () => set({lightIp: await fetchLightIp()}),
    });
