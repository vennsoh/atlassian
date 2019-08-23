import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import {
    Field,
    ErrorMessage,
    HelperMessage,
    ValidMessage,
} from "@atlaskit/form"
import { RadioGroup as AKRadioGroup } from "@atlaskit/radio"
import styled from "styled-components"

const Wrapper = styled.div`
  > div {
    margin-top: 0;
  }
`

Radio.defaultProps = {
    width: 240,
    height: 140,
    label: "Label",
    isRequired: false,
    showValidation: true,
    errorMessage: "Error text",
    validMessage: "Valid text",
    helperMessage: "Helper text",
    validationValue: "helper",
    value: "",
    options: ["A", "B", "C", "D"],
    onValueChange: () => null,
}

export function Radio(props) {
    const [radioValue, setRadioValue] = React.useState({
        label: props.value,
        value: props.value,
    })

    React.useEffect(() => {
        setRadioValue({ label: props.value, value: props.value })
    }, [props.value])

    const handleRadio = event => {
        const { value } = event.target
        setRadioValue({ label: value, value: value })
        props.onValueChange(value)
    }

    let options =
        props.options === ""
            ? []
            : props.options.map(str => ({ label: str, value: str }))

    let validationText = {
        error: <ErrorMessage>{props.errorMessage}</ErrorMessage>,
        valid: <ValidMessage>{props.validMessage}</ValidMessage>,
        helper: <HelperMessage>{props.helperMessage}</HelperMessage>,
    }

    return (
        <Wrapper>
            <Field
                name="radio"
                label={props.label}
                isRequired={props.isRequired}
            >
                {({ fieldProps }) => (
                    <>
                        <AKRadioGroup
                            {...fieldProps}
                            value={props.value}
                            options={options}
                            onChange={handleRadio}
                        />

                        {props.showValidation &&
                            validationText[props.validationValue]}
                    </>
                )}
            </Field>
        </Wrapper>
    )
}

addPropertyControls(Radio, {
    options: {
        title: "Options",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
    },
    label: {
        type: ControlType.String,
        title: "Label",
    },
    value: {
        type: ControlType.String,
        title: "Value",
    },
    isRequired: {
        type: ControlType.Boolean,
        title: "Required?",
    },
    showValidation: {
        type: ControlType.Boolean,
        title: "Validation?",
    },
    validationValue: {
        hidden(props) {
            return props.showValidation === false
        },
        type: ControlType.SegmentedEnum,
        title: "Validation",
        options: ["error", "valid", "helper"],
        optionTitles: ["Error", "Valid", "Helper"],
    },
    errorMessage: {
        hidden(props) {
            return props.validationValue !== "error"
        },
        type: ControlType.String,
        title: "Error text",
    },
    validMessage: {
        hidden(props) {
            return props.validationValue !== "valid"
        },
        type: ControlType.String,
        title: "Valid text",
    },
    helperMessage: {
        hidden(props) {
            return props.validationValue !== "helper"
        },
        type: ControlType.String,
        title: "Helper text",
    },
})
