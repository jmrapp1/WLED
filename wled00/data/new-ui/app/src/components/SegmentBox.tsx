import {Segment} from "../types/light";
import VerticalSlider from "./VerticalSlider";
import {useBoundStore} from "../state/state";
import {useEffect, useState} from "react";
import {sleep} from "../utils/utils";

export interface SegmentBoxProps {
    segment: Segment;
    className?: string;
}

export default function (props: SegmentBoxProps) {

    const store = useBoundStore();

    // Actions
    const setSegmentBrightness = useBoundStore().setSegmentBrightness;
    const setEnabled = useBoundStore().setOn;

    const [brightness, setBrightnessState] = useState(props.segment.bri || 128);
    const [updateBrightness, setUpdateBrightness] = useState(true);

    const [enabled, setEnabledState] = useState(useBoundStore().lightState?.on || false);

    useEffect(() => {
        useBoundStore.subscribe(state => {
            setBrightnessState(state.lightState?.seg.find(s => s.id === props.segment.id)?.bri || 128);
        });
    }, []);

    useEffect(() => {
        // when switched to false it means we want to send brightness data to the led
        // in order to not overload the led we want to send it on a delay
        if (updateBrightness === false) {
            // set brightness then wait before setting updateBrightness to true
            // dont update state so that UI is smooth when dragging; it will update when dragging released
            setSegmentBrightness(props.segment, brightness, false).then(() =>
                sleep(20).then(() =>
                    setUpdateBrightness(true)
                )
            );
        }
    }, [updateBrightness]);

    async function onBrightnessChange(bri: number) {
        setBrightnessState(bri);
        if (updateBrightness) {
            setUpdateBrightness(false);
        }
    }


    return <div className={` min-w-40 rounded-md dark:bg-cgray-500 grid grid-cols-2 shadow-md shadow-cgray-700 ` + (props.className ?? "")}>
        <div className={"px-2 py-4"}>
            <p className={"m-0 mt-3 text-center"}>{props.segment.n || `Segment ${props.segment.id}`}</p>
        </div>
        <div className={"flex justify-end"}>
            <VerticalSlider
                // backgroundActive={props.segment?.activePalette ? colorPaletteToVerticalGradient(props.segment.activePalette) : "#000000"}
                backgroundActive={"#9AA5B1"}
                backgroundInactive={"#616E7C"}
                onChange={onBrightnessChange}
                onChangeEnd={bri => setSegmentBrightness(props.segment, bri)}
                value={brightness ?? 128}
            />
        </div>
    </div>
}
