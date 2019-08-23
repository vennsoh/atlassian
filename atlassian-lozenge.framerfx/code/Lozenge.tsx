import * as React from "react"
import "@atlaskit/css-reset"
import AKLozenge from "@atlaskit/lozenge"
import { addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-top: -3px;
`

Lozenge.defaultProps = {
    appearance: "default",
    value: "Lozenge",
    maxWidth: 200,
    isBold: false,
    width: 200,
    height: 16,
}

export function Lozenge(props) {
    return (
        <Wrapper>
            <AKLozenge {...props} isBold={props.isBold}>
                {props.value}
            </AKLozenge>
        </Wrapper>
    )
}

addPropertyControls(Lozenge, {
    value: {
        type: ControlType.String,
        title: "Value",
    },
    appearance: {
        type: ControlType.Enum,
        title: "Appearance",
        optionTitles: [
            "Default",
            "In progress",
            "Moved",
            "New",
            "Removed",
            "Success",
        ],
        options: [
            "default",
            "inprogress",
            "moved",
            "new",
            "removed",
            "success",
        ],
    },
    maxWidth: {
        type: ControlType.Number,
        title: "Max width",
        defaultValue: 200,
        min: 0,
        max: 600,
        step: 1,
        displayStepper: true,
    },
    isBold: {
        type: ControlType.Boolean,
        title: "Bold?",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
})
