import {ReactElement} from "react";

export interface HorizontalGridProps<T> {
    rows: number;
    items: T[];
    render: (item: T, index: number, length: number) => ReactElement
}

export default function <T>(props: HorizontalGridProps<T>) {
    const itemsCopy = [...props.items];
    const perRow = Math.ceil(itemsCopy.length / props.rows);
    const rows: T[][] = [];

    while (itemsCopy.length > 0) {
        rows.push([...itemsCopy.splice(0, perRow)]);
    }

    return <div className={`flex overflow-x-scroll py-5`}>
        <div className={`grid gap-y-4 grid-cols-1`}>
        {
            rows.map(row => {
                return <div className={`grid grid-flow-col gap-4 items-stretch`}>
                    {row.map((item, index) =>
                        props.render(item, index, row.length)
                    )}
                </div>
            })
        }
        </div>
    </div>
}
