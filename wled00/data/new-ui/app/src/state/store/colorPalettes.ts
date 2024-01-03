import {StateCreator} from "zustand";
import {AppState, ColorPalettesStore} from "../types";
import {PalxResponse} from "../../types/api";
import {Color, ColorPalette} from "../../types/types";
import {sendCommand} from "../comms";

async function fetchAllPalxPages(lightIp: string) {
    let palx = {};
    let page = 0;
    let totalPages = -1;
    do {
        const palxRes = await fetch(`${lightIp}/json/palx?page=${page}`);
        const data: PalxResponse = await palxRes.json();
        palx = Object.assign({}, palx, data.p);
        totalPages = data.m;
        page++;
    } while (page < totalPages);
    return palx;
}

async function fetchColorPalettes(lightIp: string) {
    // get all palettes
    const palettesRes = await fetch(lightIp + "/json/palettes");
    const palettes: string[] = (await palettesRes.json()) || [];

    // get all palette colors
    const palx = await fetchAllPalxPages(lightIp);

    // map together
    const colorPalettes: ColorPalette[] = [];

    // go through all palettes
    for (let i = 0; i < palettes.length; i++) {

        // go through color data for palette and form all colors
        const colors: Color[] = [];
        const colorData = palx[`${i}`];
        if (!colorData) {
            console.warn(`No color data found for palette ${palettes[i]} {${i}}`);
            continue;
        }
        for (let j = 0; j < colorData.length; j++) {

            // figure out what kind of data the palette is
            const data = colorData[j];
            let r, g, b;
            let alpha = Math.round(j / colorData.length * 100); // set alpha to random

            if (Array.isArray(data)) {
                alpha = Math.round(data[0]/255*100);
                r = data[1];
                g = data[2];
                b = data[3];
            } else if (data == 'r') { // handle 'random'
                r = Math.random() * 255;
                g = Math.random() * 255;
                b = Math.random() * 255;
            } else { // handle supporting "c1", "c2", etc which represent "color 1", "color 2", etc
                /** TODO: do this
                let i = data[1] - 1;
                var cd = gId('csl').children;
                r = parseInt(cd[i].dataset.r);
                g = parseInt(cd[i].dataset.g);
                b = parseInt(cd[i].dataset.b);
                 **/
                r = Math.random() * 255;
                g = Math.random() * 255;
                b = Math.random() * 255;
            }
            if (alpha === undefined) {

            }

            // Add color
            colors.push({
                r, g, b, a: alpha
            })
        }

        // Create color palette
        colorPalettes.push({
            id: i,
            name: palettes[i],
            colors: colors
        })
    }
    return colorPalettes;
}

async function setPalette(palette: ColorPalette, state: AppState) {
    return sendCommand({
        seg: {
            pal: palette.id
        }
    }, state);
}

export const createColorPalettesStore: StateCreator<AppState, [], [], ColorPalettesStore> =
    (set, get) => ({
        colorPalettes: [],
        fetchColorPalettes: async () => set({colorPalettes: await fetchColorPalettes(get().lightIp)}),
        setPalette: (palette: ColorPalette) => setPalette(palette, get())
    });
