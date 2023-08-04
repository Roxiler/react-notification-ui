import React from "react"
import { IconProps } from "./icons.types"
const SvgComponent = ({ color = "#27374d", size = 3.2, strokeWidth = 2 }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size * 10}
        height={size * 10}
        viewBox="0 0 24 24"
    >
        <title>{"Bell"}</title>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
                stroke={color}
                strokeDasharray="0,0"
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                d="M12 5a6 6 0 0 1 6 6v7h0H6v-7a6 6 0 0 1 6-6ZM12 3a1 1 0 0 1 1 1v1h0-2V4a1 1 0 0 1 1-1ZM4 18h16M11 21h2"
            />
        </g>
    </svg>
)
export default SvgComponent

