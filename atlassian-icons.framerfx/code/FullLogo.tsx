import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Atlas from "@atlaskit/logo"

type Props = {
    logoName: string
}

export function AtlasFullLogo(props: Props) {
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
AtlasFullLogo.defaultProps = {
    width: 200,
    height: 38,
    logoName: "AtlassianLogo",
}

addPropertyControls(AtlasFullLogo, {
    logoName: {
        type: ControlType.Enum,
        title: "Company",
        options: [
            "AtlassianLogo",
            "BitbucketLogo",
            "ConfluenceLogo",
            "HipchatLogo",
            "JiraCoreLogo",
            "JiraServiceDeskLogo",
            "JiraSoftwareLogo",
            "JiraLogo",
            "StatuspageLogo",
            "OpsGenieLogo",
            "StrideLogo",
        ],
        optionTitles: [
            "Atlassian",
            "Bitbucket",
            "Confluence",
            "Hipchat",
            "Jira Core",
            "Jira Service Desk",
            "Jira Software",
            "Jira",
            "Status Page",
            "Ops Genie",
            "Stride",
        ],
    },
})
