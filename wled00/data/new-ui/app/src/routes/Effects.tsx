import {useBoundStore} from "../state/state";
import ColorPaletteBox from "../components/ColorPaletteBox";
import HorizontalGrid from "../components/HorizontalGrid";
import EffectBox from "../components/EffectBox";

export default function (props: any) {

    const store = useBoundStore();

    return <div className="grid grid-cols-1 gap-y-2">
        <h1 className={'mb-4'}>Effects</h1>
        <div>
            <HorizontalGrid
                rows={4}
                items={store.effects}
                render={(effect) => <EffectBox effect={effect}/>}
            />
        </div>
    </div>

}
