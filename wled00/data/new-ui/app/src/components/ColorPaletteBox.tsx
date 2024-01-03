import {ColorPalette} from "../types/types";
import {colorPaletteToGradient} from "../utils/colorUtils";
import {useBoundStore} from "../state/state";

export interface ColorBoxProps {
    colorPalette: ColorPalette;
    activePalette: boolean;
    className?: string;
}

// -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur

export default function (props: ColorBoxProps) {

    const setPalette = useBoundStore((state) => state.setPalette);

    return <div
        className={`cursor-pointer relative min-w-40 grid grid-cols-1 content-center justify-items-center ${props.className ?? ""}
        ${props.activePalette ? "border-1 border-gray-400 rounded-md" : "shadow-md shadow-cgray-700"}`}
        onClick={() => setPalette(props.colorPalette)}
    >
        { props.activePalette &&
            <div className="absolute -inset-1 rounded-lg opacity-75 blur" style={{background: colorPaletteToGradient(props.colorPalette)}} />
        }
        <div className="relative dark:bg-cgray-300 px-2 py-4 w-full rounded-md">
            <div className={`p-1 rounded-full border-2 light:border-cgray-700 dark:border-white b w-10 h-10 m-auto`}
                 style={{background: colorPaletteToGradient(props.colorPalette)}}/>
            <p className={"m-0 mt-3 text-center m-auto"}>{props.colorPalette.name}</p>
        </div>
    </div>
}
