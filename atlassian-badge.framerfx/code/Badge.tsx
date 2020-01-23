import * as React from "react"
import "@atlaskit/css-reset"
import AKBadge from "@atlaskit/badge"
import { addPropertyControls, ControlType, Frame } from "framer"

type Props = {
    text: string
    appearance: string
}

export function Badge(props: Props) {
    const { text } = props
    return (
        <Frame {...props} backgroundColor="transparent">
            <AKBadge {...props}>{text}</AKBadge>
        </Frame>
    )
}

Badge.defaultProps = {
    appearance: "default",
    text: "5",
    width: 20,
    height: 20,
}

addPropertyControls(Badge, {
    text: { type: ControlType.String, title: "Text" },
    appearance: {
        type: ControlType.Enum,
        title: "Appearance",
        optionTitles: [
            "Added",
            "Default",
            "Important",
            "Primary",
            "Primary Inverted",
            "Removed",
        ],
        options: [
            "added",
            "default",
            "important",
            "primary",
            "primaryInverted",
            "removed",
        ],
    },
})
