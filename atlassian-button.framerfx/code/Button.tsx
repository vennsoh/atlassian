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
    haveIcon: boolean
    iconName: string
}

export function Button(props: Props) {
    const [myIcon, setIcon] = React.useState(null)
    const { text, haveIcon, iconName } = props

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

    const ChosenIcon = <Icon glyph={() => myIcon} />

    return (
        <Frame {...props}>
            {haveIcon ? (
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
    backgroundColor: "transparent",
    haveIcon: false,
    iconName: "activity",
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
    haveIcon: {
        type: ControlType.Boolean,
        title: "Include icon?",
    },
    iconName: {
        hidden(props) {
            return props.haveIcon === false
        },
        type: ControlType.String,
        title: "Icon name",
    },
})
