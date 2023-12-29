import React, {useState, Fragment, MutableRefObject, useEffect, useRef} from 'react';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import {ColorResult} from "@uiw/react-color";

export interface ColorWheelProps {
}

export default function (props: ColorWheelProps) {
    const colorWheelDivRef = useRef();
    const [rootWidth, setRootWidth] = useState(0);

    // State
    const [hsva, setHsva] = useState({h: 214, s: 43, v: 90, a: 1});

    useEffect(() => {
        if (colorWheelDivRef !== undefined) {
            // @ts-ignore
            setRootWidth(colorWheelDivRef.current.clientWidth);
        }
    });

    function onChangeWheel(color: ColorResult) {
        setHsva({...hsva, ...color.hsva})
    }

    function onChangeSlider(newShade: any) {
        setHsva({...hsva, ...newShade});
    }

    return (
        <>
            { /** @ts-ignore **/}
            <div ref={colorWheelDivRef}>
                <Fragment>
                    <Wheel
                        color={hsva}
                        width={rootWidth}
                        height={rootWidth}
                        onChange={onChangeWheel}
                        style={{marginBottom: "40px"}}
                    />
                    {/*<ShadeSlider
                        hsva={hsva}
                        onChange={onChangeSlider}
                    />*/}
                </Fragment>
            </div>
        </>
    );
}
