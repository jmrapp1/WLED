import {StateCreator} from "zustand";
import {AppState, ColorPalettesStore, EffectsStore} from "../types";
import {Effect} from "../../types/types";
import {sendCommand} from "../comms";

async function fetchEffects(lightIp: string): Promise<Effect[]> {
    // get all effects
    const effectsRes = await fetch(lightIp + "/json/effects");
    const effects: string[] = await effectsRes.json();

    // get all effect data
    const effectDataRes = await fetch(lightIp + "/json/fxdata");
    const allEffectData: string[] = await effectDataRes.json();

    return effects
        .filter(effectName => effectName !== 'RSVD') // Dont process if name is RSVD
        .map((effectName, i) => {
            // Get data for effect
            const effectData = allEffectData[i] || ';;!;1';
            const effectParams = effectData.split(";");
            const effectFlags = effectParams[3] || '1';

            const paletteEffect = effectParams[2] === '!';
            const zerodEffect = effectFlags.indexOf('0') >= 0;
            const onedEffect = effectFlags.indexOf('1') >= 0;
            const twodEffect = effectFlags.indexOf('2') >= 0;
            const volumeEffect = effectFlags.indexOf('v') >= 0;
            const frequencyEffect = effectFlags.indexOf('f') >= 0;

            return {
                id: i,
                name: effectName,
                paletteEffect,
                zerodEffect,
                onedEffect,
                twodEffect,
                volumeEffect,
                frequencyEffect
            };
        });
}

export async function setEffect(effect: Effect, state: AppState) {
    return await sendCommand({
        seg: {
            fx: effect.id,
            fxdef: true // TODO: Update to config option
        }
    }, state);
}

export const createEffectsStore: StateCreator<AppState, [], [], EffectsStore> =
    (set, get) => ({
        effects: [],
        fetchEffects: async () => set({effects: await fetchEffects(get().lightIp)}),
        setEffect: (effect) => setEffect(effect, get())
    });
