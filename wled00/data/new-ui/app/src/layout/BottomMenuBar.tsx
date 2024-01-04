import {
    BookmarkSquareIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    SparklesIcon,
    Square3Stack3DIcon
} from "@heroicons/react/24/outline";
import {Slider} from "@nextui-org/react";
import {useBoundStore} from "../state/state";
import {useEffect, useRef, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {clsx} from "clsx";

const iconClasses = isActive => "w-5 h-5 mb-1 m-auto " + (isActive ? "dark:text-gray-100" : "text-gray-500 dark:text-gray-400");

const options = [
    {
        icon: isActive => <LightBulbIcon className={iconClasses(isActive)}/>,
        text: "Home",
        link: "/"
    },
    {
        icon: isActive => <BookmarkSquareIcon className={iconClasses(isActive)}/>,
        text: "Presets",
        link: "/presets"
    },
    {
        icon: isActive => <Square3Stack3DIcon className={iconClasses(isActive)}/>,
        text: "Segments",
        link: "/segments"
    },
    {
        icon: isActive => <Cog8ToothIcon className={iconClasses(isActive)}/>,
        text: "Settings",
        link: "/settings"
    },
]

export default function (props: any) {

    const location = useLocation();
    const route = location.pathname;
    const isActive = path => route === path;

    return <div
        className="fixed bottom-0 left-0 z-50 w-full h-[80px] bg-white bg-slate-50 rounded-t-md dark:bg-cgray-700 dark:border-cgray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            {options.map(opt =>
                <div className={clsx(
                    'inline-flex flex-col items-center pb-4 pt-4',
                    isActive(opt.link) ? "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#cb3e0d] to-[#d02773]" : ""
                )}>
                    <NavLink
                        to={opt.link}
                        key={opt.text}
                        className={"group no-underline"}>
                        {opt.icon(isActive(opt.link))}
                        <p className={"!m-0 " + (isActive(opt.link) ? "dark:text-gray-200" : "text-gray-500 dark:text-gray-400")}>
                            {opt.text}
                        </p>
                    </NavLink>
                </div>
            )}
        </div>
    </div>
}
