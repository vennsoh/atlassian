import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import AKButton from "@atlaskit/button"

export function Button(props) {
    return <AKButton {...props}>{props.text}</AKButton>
}

Button.defaultProps = {
    appearance: "primary",
    text: "Hello world",
    isDisabled: false,
    width: 92,
    height: 32,
    shouldFitContainer: false,
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
