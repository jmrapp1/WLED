import {useBoundStore} from "../state/state";
import ColorPaletteBox from "../components/ColorPaletteBox";
import HorizontalGrid from "../components/HorizontalGrid";
import {globalPaddingXCss, globalX} from "../layout/global";
import EffectBox from "../components/EffectBox";

export default function (props: any) {

    const store = useBoundStore();

    // Get segments and get the active effects and palette
    const segments = store.lightState?.seg || [];
    const selectedEffects = segments.map(seg => seg.fx);
    const selectedPalettes = segments.map(seg => seg.pal);

    return <div className="grid grid-cols-1 gap-y-2">
        <div className={globalPaddingXCss}>
            <h1>Home</h1>
            <p className={"dark:text-cgray-0 m-0"}>Select effects, choose and customize color palettes, and target specific segments all in one place!</p>
        </div>
        <div>
            <p className={`dark:text-gray-300 mb-0 ${globalPaddingXCss}`}>PALETTES</p>
            <div>
                <HorizontalGrid
                    rows={2}
                    items={store.colorPalettes}
                    render={(palette, i, len) =>
                        <ColorPaletteBox
                            colorPalette={palette}
                            activePalette={selectedPalettes.indexOf(palette.id) >= 0}
                            className={i === 0 ? `ml-${globalX}` : ''}
                        />
                    }
                />
            </div>
        </div>
        <div className={""}>
            <p className={`dark:text-gray-300 mb-0 ${globalPaddingXCss}`}>EFFECTS</p>
            <div>
                <HorizontalGrid
                    rows={3}
                    items={store.effects}
                    render={(effect, i, len) =>
                        <EffectBox
                            effect={effect}
                            activeEffect={selectedEffects.indexOf(effect.id) >= 0}
                            className={i === 0 ? `ml-${globalX}` : ''}
                        />
                    }
                />
            </div>
        </div>
    </div>

}
