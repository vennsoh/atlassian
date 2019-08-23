import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import Icon from "@atlaskit/icon"

export function AtlasIcons(props) {
    const [myIcon, setIcon] = React.useState(null)

    let iconName = props.iconName

    React.useEffect(() => {
        async function loader() {
            const icon = await import(`@atlaskit/icon/glyph/${iconName}.js`)
            return icon
        }

        loader().then(x => {
            setIcon(x.default)
        })

        return () => {}
    }, [iconName])

    return <Icon glyph={() => myIcon} size={props.size} />
}

// Set default properties
AtlasIcons.defaultProps = {
    width: 24,
    height: 24,
    iconName: "activity",
    size: "medium",
}

addPropertyControls(AtlasIcons, {
    iconName: { type: ControlType.String, title: "Icon Name" },
    size: {
        type: ControlType.Enum,
        title: "Size",
        options: ["small", "medium"],
        optionTitles: ["16", "24"],
    },
})
