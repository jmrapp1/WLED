import {useBoundStore} from "../state/state";
import ColorPaletteBox from "../components/ColorPaletteBox";
import HorizontalGrid from "../components/HorizontalGrid";
import EffectBox from "../components/EffectBox";
import ReactSlider from "react-slider";

export default function (props: any) {

    const store = useBoundStore();

    return <div className="grid grid-cols-1 gap-y-2">
        <h1 className={'mb-4'}>Effects</h1>
        <div>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </div>
    </div>

}
