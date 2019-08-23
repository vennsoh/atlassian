import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import * as Atlas from "@atlaskit/logo"

type Props = {
    logoName: string
}

export function AtlasWordmarks(props: Props) {
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
AtlasWordmarks.defaultProps = {
    width: 165,
    height: 38,
    logoName: "AtlassianWordmark",
}

addPropertyControls(AtlasWordmarks, {
    logoName: {
        type: ControlType.Enum,
        title: "Company",
        options: [
            "AtlassianWordmark",
            "BitbucketWordmark",
            "ConfluenceWordmark",
            "HipchatWordmark",
            "JiraCoreWordmark",
            "JiraServiceDeskWordmark",
            "JiraSoftwareWordmark",
            "JiraWordmark",
            "StatuspageWordmark",
            "OpsGenieWordmark",
            "StrideWordmark",
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
