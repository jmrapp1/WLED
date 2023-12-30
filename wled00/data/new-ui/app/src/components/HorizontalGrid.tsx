import {ReactElement} from "react";

export interface HorizontalGridProps<T> {
    rows: number;
    items: T[];
    render: (item: T) => ReactElement
    className?: string;
}

export default function <T>(props: HorizontalGridProps<T>) {

    return <div className="flex overflow-x-scroll">
        <div className={`grid grid-rows-${props.rows} grid-flow-col gap-4 ${props.className ?? ''}`}>
            { props.items.map(props.render) }
        </div>
    </div>
}
