import {Effect} from "../types/types";
import {CSSProperties} from "react/index";
import {useBoundStore} from "../state/state";

export interface EffectBoxProps {
    effect: Effect;
    activeEffect: boolean;
    className?: string;
}

const flagStyle: CSSProperties = {fontSize: '24px', filter: 'grayscale(100%)'};

export default function (props: EffectBoxProps) {

    const setEffect = useBoundStore((state) => state.setEffect);

    return <div
        className={`px-2 py-4 min-w-40 rounded-md dark:bg-cgray-300 grid grid-cols-1 content-center justify-items-center shadow-md shadow-cgray-700 ` + (props.className ?? "")}
        onClick={() => setEffect(props.effect)}
    >
        <div className={`flex gap-2`}>
            {props.effect.paletteEffect && <span style={flagStyle}>&#x1F3A8;</span>}
            {/*{props.effect.onedEffect && <span style={{fontSize: '14px'}} className={'font-bold m-auto'}>1D</span>}*/}
            {props.effect.zerodEffect && <span style={flagStyle}>&#8226;</span>}
            {props.effect.onedEffect && <span style={flagStyle}>&#8942;</span>}
            {props.effect.twodEffect && <span style={flagStyle}>&#9638;</span>}
            {props.effect.volumeEffect && <span style={flagStyle}>&#9834;</span>}
            {props.effect.frequencyEffect && <span style={flagStyle}>&#9835;</span>}
        </div>
        <p className={"m-0 mt-3 text-center"}>{props.effect.name}</p>
    </div>
}
