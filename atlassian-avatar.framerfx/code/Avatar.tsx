import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import AKAvatar from "@atlaskit/avatar"

Avatar.defaultProps = {
    width: 100,
    height: 100,
    appearance: "circle",
    borderColor: "#FFFFFF",
    maxCount: 10,
    size: "xlarge",
    src:
        "https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg",
}

export function Avatar(props) {
    return <AKAvatar name="avatar" {...props} />
}
addPropertyControls(Avatar, {
    borderColor: {
        type: ControlType.Color,
        title: "Border color",
    },
    src: {
        type: ControlType.String,
        title: "Image src",
    },
    size: {
        type: ControlType.Enum,
        title: "Size",
        optionTitles: [
            "xsmall",
            "small",
            "medium",
            "large",
            "xlarge",
            "xxlarge",
        ],
        options: ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"],
    },
    appearance: {
        type: ControlType.Enum,
        title: "Appearance",
        optionTitles: ["Square", "Circle"],
        options: ["square", "circle"],
    },
})
