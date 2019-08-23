import * as React from "react"
import Button from "@atlaskit/button"
import styled from "styled-components"
import "@atlaskit/css-reset"
//import WarningIcon from "@atlaskit/icon/glyph/warning"
import { addPropertyControls, ControlType } from "framer"
import AKBanner from "@atlaskit/banner"

const ButtonWrapper = styled.div`
  padding-bottom: ${(p: ItemProps) => (p.isOpen ? 8 : 0)}px;
  transition: padding 0.25s ease-in-out;
  will-change: padding;
`

// const WarningBanner = ({ isOpen }: { isOpen: boolean }) => {
const WarningBanner = props => {
    return (
        <AKBanner isOpen={props.isOpen} appearance={props.appearance}>
            {props.text}
        </AKBanner>
    )
}

//Create component and return it
export function Banner(props) {
    const [state, setState] = React.useState({
        isOpen: props.isOpen,
    })

    React.useEffect(() => {
        if (state.isOpen !== props.isOpen) {
            setState({
                isOpen: props.isOpen,
            })
        }
    }, [props.isOpen])

    const toggleBanner = () => {
        props.onClick(!state.isOpen)
        setState({
            isOpen: !state.isOpen,
        })
    }

    return (
        <div>
            <ButtonWrapper isOpen={state.isOpen}>
                <Button appearance="primary" onClick={toggleBanner}>
                    {state.isOpen ? "Hide" : "Show"}
                </Button>
            </ButtonWrapper>
            <WarningBanner
                isOpen={state.isOpen}
                appearance={props.appearance}
                text={props.text}
            />
        </div>
    )
}

//Define default props
Banner.defaultProps = {
    text: "Hello World!",
    isOpen: false,
    appearannce: "warning",
    onClick: (isOpen: boolean) => null,
}

//Create property controls to expose properties in the canvas
addPropertyControls(Banner, {
    text: { type: ControlType.String, title: "Text" },
    appearance: {
        type: ControlType.Enum,
        title: "Appearance",
        options: ["warning", "error", "announcement"],
        optionTitles: ["Warning", "Error", "Announcement"],
    },
    isOpen: {
        type: ControlType.Boolean,
        title: "isOpen",
        defaultValue: false,
    },
})
