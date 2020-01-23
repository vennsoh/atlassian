import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import "@atlaskit/css-reset"
import AKButton from "@atlaskit/button"
import Icon from "@atlaskit/icon"

type Props = {
    bgColor: string
    appearance: string
    text: string
    isDisabled: boolean
    width: number
    height: number
    shouldFitContainer: boolean
    hasicon: boolean
    iconname: string
    iconColor: string
    isSelected: boolean
}

export function Button(props: Props) {
    const [myIcon, setIcon] = React.useState(null)
    const { text, hasicon, iconname, iconColor } = props

    React.useEffect(() => {
        async function loader() {
            const icon = await import(`@atlaskit/icon/glyph/${iconname}.js`)
            return icon
        }

        loader().then(x => {
            setIcon(x.default)
        })

        return () => {}
    }, [iconname])

    const ChosenIcon = <Icon primaryColor={iconColor} glyph={() => myIcon} />

    return (
        <Frame {...props} backgroundColor="transparent">
            {hasicon ? (
                <AKButton {...props} iconBefore={ChosenIcon}>
                    {text}
                </AKButton>
            ) : (
                <AKButton {...props}>{text}</AKButton>
            )}
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
    iconname: "activity",
    hasicon: false,
    iconColor: "",
    isSelected: false,
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
    isSelected: {
        type: ControlType.Boolean,
        title: "Selected?",
    },
    hasicon: {
        type: ControlType.Boolean,
        title: "Include icon?",
    },
    iconname: {
        hidden(props) {
            return props.hasicon === false
        },
        type: ControlType.String,
        title: "Icon name",
    },
    iconColor: {
        hidden(props) {
            return props.hasicon === false
        },
        type: ControlType.String,
        title: "Icon color",
    },
})
