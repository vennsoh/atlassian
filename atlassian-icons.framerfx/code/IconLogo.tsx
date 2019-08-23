import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Atlas from "@atlaskit/logo"

type Props = {
    logoName: string
}

export function AtlasIconLogo(props: Props) {
    const allowed = [props.logoName]

    const Filtered = Object.keys(Atlas)
        //@ts-ignore
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = Atlas[key]
            return obj[key]
        }, {})

    return <Filtered />
}

// Set default properties
AtlasIconLogo.defaultProps = {
    width: 32,
    height: 32,
    logoName: "AtlassianIcon",
}

addPropertyControls(AtlasIconLogo, {
    logoName: {
        type: ControlType.Enum,
        title: "Icon Size",
        options: [
            "AtlassianIcon",
            "BitbucketIcon",
            "ConfluenceIcon",
            "HipchatIcon",
            "JiraCoreIcon",
            "JiraServiceDeskIcon",
            "JiraSoftwareIcon",
            "JiraIcon",
            "StatuspageIcon",
            "OpsGenieIcon",
            "StrideIcon",
        ],
    },
})
