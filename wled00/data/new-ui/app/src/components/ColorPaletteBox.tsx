import {ColorPalette} from "../types/types";
import {colorPaletteToGradient} from "../utils/colorUtils";
import {useBoundStore} from "../state/state";
import clsx from "clsx";

export interface ColorBoxProps {
    colorPalette: ColorPalette;
    activePalette: boolean;
    className?: string;
}

// -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur

export default function (props: ColorBoxProps) {

    const setPalette = useBoundStore((state) => state.setPalette);

    return <div
        className={`cursor-pointer relative min-w-40 grid grid-cols-1 content-center justify-items-center light:border-1 light:border-gray-500 rounded-md ${props.className ?? ""}`}
        onClick={() => setPalette(props.colorPalette)}
    >
        <div className="absolute -inset-1 rounded-lg opacity-75 blur !transition-all !duration-1000" style={{
                background: props.activePalette ? colorPaletteToGradient(props.colorPalette) : ''
            }} />

        <div className={clsx(
            `relative bg-white dark:bg-cgray-500 px-2 py-4 md:py-8 w-full rounded-md`,
            props.activePalette ? "" : "border-1 dark:border-0 shadow-md dark:shadow-cgray-700"
        )}>
            <div className={`p-1 rounded-full border-2 border-gray-800 dark:border-white b w-10 h-10 m-auto`}
                 style={{background: colorPaletteToGradient(props.colorPalette)}}/>
            <p className={"!m-0 mt-3 text-center m-auto"}>{props.colorPalette.name}</p>
        </div>
    </div>
}
