import ColorWheel from "../components/ColorWheel";
import {useBoundStore} from "../state/state";
import ColorBox from "../components/ColorBox";

export default function (props: any) {

    const store = useBoundStore();

    return <div className="grid grid-cols-1">
        <h1 className={'mb-4'}>Home</h1>
        <div>
            <p className={"dark:text-cgray-100 mb-1"}>MY COLORS</p>
            <div className="grid grid-cols-3 gap-4 content-stretch">
                { store.colorPalettes.map(p => <ColorBox colorPalette={p} />) }
            </div>
        </div>
    </div>

}
