import {Segment} from "../types/light";
import VerticalSlider from "./VerticalSlider";
import {useBoundStore} from "../state/state";
import {useEffect, useState} from "react";
import {sleep} from "../utils/utils";
import {SparklesIcon} from "@heroicons/react/24/solid";
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import {clsx} from "clsx";

export interface SegmentBoxProps {
    segment: Segment;
    className?: string;
}

export default function (props: SegmentBoxProps) {

    const store = useBoundStore();

    // Actions
    const setSegmentBrightness = useBoundStore().setSegmentBrightness;
    const setSegmentSelected = useBoundStore().setSegmentSelected;

    const [brightness, setBrightnessState] = useState(props.segment.bri || 128);
    const [updateBrightness, setUpdateBrightness] = useState(true);

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

    return <div
        className={clsx(`min-w-40 rounded-md dark:bg-cgray-500 grid grid-cols-3 shadow-md shadow-cgray-700`, props.segment.sel ? "border-1 border-green-300" : "border-1 border-cgray-500", props.className ?? "")}
        onClick={() => setSegmentSelected(props.segment, !props.segment.sel)}
    >

        <div className={"col-span-2 pl-4 p-4 grid grid-cols-1 justify-start"}>
            <p className={"!m-0 font-semibold flex items-center"}>
                <CheckCircleIcon className={clsx("h-5 w-5 mr-2", props.segment.sel ? 'text-green-400' : 'text-cgray-200')}/>
                {props.segment.n || `Segment ${props.segment.id}`}
            </p>
            <p className={"!m-0 text-cgray-100 flex items-center"}>
                <SparklesIcon className={"h-5 w-5 mr-2"}/> {props.segment?.activeEffect?.name || `No live effect`}
            </p>
            <p className={"!m-0 text-cgray-100 flex items-center"}>
                <span className={"grayscale mr-2 md:mr-1"}>&#x1F3A8;</span>
                {props.segment?.activePalette?.name || `No selected color`}
            </p>
            <div>

            </div>
        </div>
        <div className={"flex justify-end"}>
            <VerticalSlider
                // backgroundActive={props.segment?.activePalette ? colorPaletteToVerticalGradient(props.segment.activePalette, 1) : "#000000"}
                backgroundActive={"#323F4B"}
                backgroundInactive={"#52606D"}
                onChange={onBrightnessChange}
                onChangeEnd={bri => setSegmentBrightness(props.segment, bri)}
                value={brightness ?? 128}
            />
        </div>
    </div>
}
