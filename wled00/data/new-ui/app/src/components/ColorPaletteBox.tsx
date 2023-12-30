import {ColorPalette} from "../types/types";
import {colorPaletteToGradient} from "../utils/colorUtils";
import {useBoundStore} from "../state/state";

export interface ColorBoxProps {
    colorPalette: ColorPalette;
}

export default function (props: ColorBoxProps) {

    const setPalette = useBoundStore((state) => state.setPalette);

    return <div
        className={`px-2 py-4 min-w-40 rounded-md dark:bg-cgray-700 grid grid-cols-1 content-center justify-items-center shadow-lg`}
        onClick={() => setPalette(props.colorPalette)}
    >
        <div className={`p-1 rounded-full border-2 light:border-cgray-700 dark:border-white b w-10 h-10`}
             style={{background: colorPaletteToGradient(props.colorPalette)}}/>
        <p className={"m-0 mt-3 text-center"}>{props.colorPalette.name}</p>
    </div>
}
