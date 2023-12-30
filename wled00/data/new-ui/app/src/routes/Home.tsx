import {useBoundStore} from "../state/state";
import ColorPaletteBox from "../components/ColorPaletteBox";
import HorizontalGrid from "../components/HorizontalGrid";
import EffectBox from "../components/EffectBox";

export default function (props: any) {

    const store = useBoundStore();

    return <div className="grid grid-cols-1 gap-y-2">
        <h1 className={'mb-4'}>Home</h1>
        <div>
            <p className={"dark:text-cgray-100 mb-1"}>EFFECTS</p>
            <HorizontalGrid
                rows={2}
                items={store.effects}
                className={"pt-2 pb-5"}
                render={(effect) => <EffectBox effect={effect}/>}
            />
        </div>
        <div>
            <p className={"dark:text-cgray-100 mb-1"}>PALETTES</p>
            <HorizontalGrid
                rows={2}
                items={store.colorPalettes}
                className={"pt-2 pb-5"}
                render={(palette) => <ColorPaletteBox colorPalette={palette}/>}
            />
        </div>
    </div>

}
