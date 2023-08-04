import React from "react"
import { IconProps } from "./icons.types"
function Icon({ color = "#27374d", size = 3.2, strokeWidth = 2 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size * 10}
            height={size * 10}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h3.59c.383 0 .575 0 .73-.052a1 1 0 0 0 .627-.628c.053-.156.053-.348.053-.734 0-.169 0-.253-.014-.334a.998.998 0 0 0-.173-.42c-.048-.067-.108-.127-.227-.246l-.39-.39a.67.67 0 0 1-.196-.474V10a7 7 0 1 0-14 0v3.722a.67.67 0 0 1-.196.474l-.39.39c-.12.12-.179.179-.226.245a1 1 0 0 0-.175.421c-.013.08-.013.165-.013.334 0 .386 0 .578.052.734a1 1 0 0 0 .629.628c.155.052.346.052.729.052H9"
            />
        </svg>
    );
}

export default Icon;
