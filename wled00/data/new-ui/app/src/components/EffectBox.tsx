import {ColorPalette, Effect} from "../types/types";
import {CSSProperties} from "react/index";
import {useBoundStore} from "../state/state";
import {colorPaletteToGradient} from "../utils/colorUtils";

export interface EffectBoxProps {
    effect: Effect;
    activeEffect: boolean;
    activePalette?: ColorPalette;
    className?: string;
}

const flagStyle: CSSProperties = {fontSize: '24px', filter: 'grayscale(100%)'};

export default function (props: EffectBoxProps) {

    const setEffect = useBoundStore((state) => state.setEffect);

    return <div
        className={`relative px-2 py-4 min-w-40 rounded-md dark:bg-cgray-500 grid grid-cols-1 content-center justify-items-center shadow-md dark:shadow-cgray-700 ` + (props.className ?? "")}
        onClick={() => setEffect(props.effect)}
    >
        {
            props.activeEffect &&
            <div className="absolute -inset-1 rounded-lg opacity-45 blur" style={{
                background: props.activePalette ? colorPaletteToGradient(props.activePalette) : "linear-gradient(to right,#d7dbe0,#9AA5B1)"
            }}/>
        }

        <div className={`relative flex gap-2`}>
            {props.effect.paletteEffect && <span style={flagStyle}>&#x1F3A8;</span>}
            {props.effect.zerodEffect && <span style={flagStyle}>&#8226;</span>}
            {props.effect.onedEffect && <span style={flagStyle}>&#8942;</span>}
            {props.effect.twodEffect && <span style={flagStyle}>&#9638;</span>}
            {props.effect.volumeEffect && <span style={flagStyle}>&#9834;</span>}
            {props.effect.frequencyEffect && <span style={flagStyle}>&#9835;</span>}
        </div>
        <p className={"!m-0 mt-3 text-center"} style={props.activeEffect ? { filter: 'grayscale(100%)'} : {}}>{props.effect.name}</p>
    </div>
}
