import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import AKRange from "@atlaskit/range"
import styled from "styled-components"

Range.defaultProps = {
    width: 240,
    height: 40,
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    onValueChange: () => null,
}

export function Range(props) {
    const [rangeValue, setRangeValue] = React.useState(props.value)

    React.useEffect(() => {
        setRangeValue(props.value)
    }, [props.value])

    const handleRangeValue = event => {
        setRangeValue(event)
        props.onValueChange(event)
    }

    return (
        <AKRange
            step={props.step}
            value={rangeValue}
            min={props.min}
            max={props.max}
            onChange={handleRangeValue}
        />
    )
}

addPropertyControls(Range, {
    defaultValue: {
        title: "Default value",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 0.1,
    },
    value: {
        title: "Value",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 0.1,
    },
    min: {
        title: "Min",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 0.1,
    },
    max: {
        title: "Max",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 0.1,
    },
    step: {
        title: "Step",
        type: ControlType.Number,
        min: 0,
        max: 100,
        step: 0.1,
        displayStepper: true,
    },
})
