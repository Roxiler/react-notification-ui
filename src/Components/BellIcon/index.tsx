import React from "react"
import { FillOne, FillTwo, OutlineOne, OutlineTwo } from "../icons"
import { IconProps } from "../icons/icons.types"

export type BellIconProps = {
    variant?: "OutlineOne" | "OutlineTwo" | "FillOne" | "FillTwo"
} & IconProps

const BellIcon = (props: BellIconProps) => {
    const { variant, ...rest } = props
    switch (variant) {
        case "OutlineOne":
            return <OutlineOne {...rest} />
        case "OutlineTwo":
            return <OutlineTwo {...rest} />
        case "FillOne":
            return <FillOne {...rest} />
        default:
            return <FillTwo {...rest} />
    }
}

export default React.memo(BellIcon)
