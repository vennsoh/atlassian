import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import "@atlaskit/css-reset"
import AKButton from "@atlaskit/button"

type Props = {
    bgColor: string
    appearance: string
    text: string
    isDisabled: boolean
    width: number
    height: number
    shouldFitContainer: boolean
}

export function Button(props: Props) {
    const { text } = props

    return (
        <Frame {...props}>
            <AKButton {...props}>{text}</AKButton>
        </Frame>
    )
}

Button.defaultProps = {
    appearance: "primary",
    text: "Hello world",
    isDisabled: false,
    width: 92,
    height: 32,
    shouldFitContainer: false,
    backgroundColor: "transparent",
}

addPropertyControls(Button, {
    text: { type: ControlType.String, title: "Text" },
    isDisabled: {
        type: ControlType.Boolean,
        title: "Disabled",
    },
    appearance: {
        type: ControlType.Enum,
        title: "Appearance",
        optionTitles: [
            "Default",
            "Primary",
            "Warning",
            "Danger",
            "Help",
            "Subtle",
            "Link",
            "Subtle link",
        ],
        options: [
            "default",
            "primary",
            "warning",
            "danger",
            "help",
            "subtle",
            "link",
            "subtle-link",
        ],
    },
    shouldFitContainer: {
        type: ControlType.Boolean,
        title: "Fit container",
    },
})
