import {BookmarkSquareIcon, Cog8ToothIcon, LightBulbIcon, SparklesIcon} from "@heroicons/react/24/outline";
import {Slider} from "@nextui-org/react";

const iconClasses = "w-5 h-5 mb-2 text-gray-500 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-500"

const options = [
    {
        icon: <LightBulbIcon className={iconClasses}/>,
        text: "Home"
    },
    {
        icon: <SparklesIcon className={iconClasses}/>,
        text: "Effects"
    },
    {
        icon: <BookmarkSquareIcon className={iconClasses}/>,
        text: "Presets"
    },
    {
        icon: <Cog8ToothIcon className={iconClasses}/>,
        text: "Settings"
    },
]

export default function (props: any) {

    return <div className="fixed bottom-0 left-0 z-50 w-full h-30 border-gray-200 dark:bg-cgray-700">
        <div className="grid h-full h-5 font-medium px-6 mt-2 mb-5">
            <Slider
                size="lg"
                step={1}
                maxValue={100}
                minValue={0}
                color="success"
                showOutline={true}
                aria-label="Brightness"
                defaultValue={60}
                className="max-w-md"
            />
        </div>
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium mb-2">
            {options.map(opt =>
                <button type="button" key={opt.text}
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    {opt.icon}
                    <span
                        className="text-sm text-gray-500 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500">{opt.text.toUpperCase()}</span>
                </button>
            )}
        </div>
    </div>
}
