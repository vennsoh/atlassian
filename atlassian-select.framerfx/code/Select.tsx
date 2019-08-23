import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import {
    Field,
    ErrorMessage,
    HelperMessage,
    ValidMessage,
} from "@atlaskit/form"
import AKSelect from "@atlaskit/select"
import styled from "styled-components"

const Wrapper = styled.div`
  > div {
    margin-top: 0;
  }
`

Select.defaultProps = {
    width: 240,
    height: 80,
    label: "Label",
    isRequired: false,
    showValidation: true,
    placeholder: "Placeholder",
    errorMessage: "Error text",
    validMessage: "Valid text",
    helperMessage: "Helper text",
    validationValue: "helper",
    defaultOption: "A",
    options: ["A", "B", "C", "D"],
    value: "",
    onValueChange: () => null,
}

export function Select(props) {
    const [selectValue, setSelectValue] = React.useState({
        label: props.value,
        value: props.value,
    })

    React.useEffect(() => {
        setSelectValue({ label: props.value, value: props.value })
    }, [props.value])

    const handleSelect = event => {
        const { value } = event
        setSelectValue({ label: value, value: value })
        props.onValueChange(value)
    }

    let validationText = {
        error: <ErrorMessage>{props.errorMessage}</ErrorMessage>,
        valid: <ValidMessage> {props.validMessage}</ValidMessage>,
        helper: <HelperMessage> {props.helperMessage}</HelperMessage>,
    }

    let options =
        props.options === ""
            ? []
            : props.options.map(str => ({ label: str, value: str }))

    return (
        <Wrapper>
            <Field
                name="select"
                label={props.label}
                isRequired={props.isRequired}
            >
                {({ fieldProps }) => (
                    <>
                        <AKSelect
                            {...fieldProps}
                            options={options}
                            placeholder={props.placeholder}
                            onChange={handleSelect}
                        />

                        {props.showValidation &&
                            validationText[props.validationValue]}
                    </>
                )}
            </Field>
        </Wrapper>
    )
}

addPropertyControls(Select, {
    label: {
        type: ControlType.String,
        title: "Label",
    },
    placeholder: {
        type: ControlType.String,
        title: "Placeholder",
    },
    options: {
        title: "Options",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["A", "B", "C", "D"],
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
