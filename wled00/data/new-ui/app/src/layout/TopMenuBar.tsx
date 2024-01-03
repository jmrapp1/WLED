import {
    LightBulbIcon, MoonIcon,SunIcon
} from "@heroicons/react/24/outline";
import {Slider, Switch} from "@nextui-org/react";
import {useBoundStore} from "../state/state";
import {useEffect, useRef, useState} from "react";
import {globalPaddingXCss} from "./global";
import {sleep} from "../utils/utils";

export default function (props: any) {

    const store = useBoundStore();

    // Actions
    const setBrightness = useBoundStore().setBrightness;
    const setOn = useBoundStore().setOn;

    const [brightness, setBrightnessState] = useState(useBoundStore().lightState?.bri || 128);
    const [updateBrightness, setUpdateBrightness] = useState(true);

    const [on, setOnState] = useState(useBoundStore().lightState?.on || false);

    useEffect(() => {
        useBoundStore.subscribe(state => {
            setBrightnessState(state.lightState?.bri || 128);
            setOnState(state.lightState?.on || false);
        });
    }, []);

    useEffect(() => {
        // when switched to false it means we want to send brightness data to the led
        // in order to not overload the led we want to send it on a delay
        if (updateBrightness === false) {
            // set brightness then wait before setting updateBrightness to true
            // dont update state so that UI is smooth when dragging; it will update when dragging released
            setBrightness(brightness, false).then(() =>
                sleep(100).then(() =>
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
        className={`fixed top-0 left-0 z-50 w-full py-4 rounded-b-md drop-shadow-md shadow-cgray-700 ${globalPaddingXCss} 
            bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800`}>
        <div className={"flex justify-between items-center"}>
            <h2 className={`!m-0 flex font-semibold text-white -mt-1`}>
                <img className={'h-8 md:h-10 !m-0 !mr-1'} src={"/icon1.png"} />
                {store.lightInfo?.name}
            </h2>
            <div className="">
                <Switch
                    size="lg"
                    color="primary"
                    className={"-mr-2"}
                    isSelected={on}
                    onChange={e => {
                        setOnState(e.target.checked);
                        setOn(e.target.checked);
                    }}
                    thumbIcon={({isSelected, className}) =>
                        isSelected ? (
                            <SunIcon className={className + ' text-gray-400 p-[3px]'}/>
                        ) : (
                            <MoonIcon className={className + ' text-gray-400 p-[3px]'}/>
                        )
                    }
                />
            </div>
        </div>
        <div className="grid h-full h-5 font-medium mt-3">
            <Slider
                size="md"
                step={1}
                radius={"lg"}
                maxValue={255}
                minValue={0}
                color="primary"
                showOutline={false}
                aria-label="Brightness"
                defaultValue={128}
                startContent={<SunIcon className="h-4"/>}
                endContent={<SunIcon className="h-6"/>}
                value={brightness}
                onChange={bri => onBrightnessChange(bri as any)}
                onChangeEnd={bri => setBrightness(bri as any, true)}
                classNames={{
                    base: "max-w-md",
                    track: "border-s-gray-100",
                    filler: "bg-gradient-to-r from-gray-100 to-gray-200"
                }}
                renderThumb={(props) => (
                    <div
                        {...props}
                        className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                    >
                            <span
                                className="transition-transform bg-gradient-to-br shadow-small from-blue-300 to-blue-500 rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80"/>
                    </div>
                )}
            />
        </div>

    </div>
}
