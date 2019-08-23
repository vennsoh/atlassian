import { format } from "date-fns"
import * as React from "react"
import "@atlaskit/css-reset"
import { addPropertyControls, ControlType } from "framer"
import {
    Field,
    ErrorMessage,
    HelperMessage,
    ValidMessage,
} from "@atlaskit/form"
import {
    DatePicker,
    DateTimePicker,
    TimePicker,
} from "@atlaskit/datetime-picker"
import styled from "styled-components"

const Wrapper = styled.div`
  > div {
    margin-top: 0;
  }
`

Datetime_picker.defaultProps = {
    width: 240,
    height: 80,
    label: "Label",
    dateFormat: "YYYY/MM/DD",
    isRequired: false,
    showValidation: true,
    placeholder: "Placeholder",
    errorMessage: "Error text",
    validMessage: "Valid text",
    helperMessage: "Helper text",
    validationValue: "helper",
    value: "",
    onValueChange: () => null,
}

export function Datetime_picker(props) {
    const [dateValue, setDateValue] = React.useState(props.value)

    React.useEffect(() => {
        setDateValue(props.value)
    }, [props.value])

    const handleDate = event => {
        setDateValue(event)
        const outputValue = format(new Date(event), props.dateFormat)
        props.onValueChange(event, outputValue)
    }

    let validationText = {
        error: <ErrorMessage>{props.errorMessage}</ErrorMessage>,
        valid: <ValidMessage> {props.validMessage}</ValidMessage>,
        helper: <HelperMessage> {props.helperMessage}</HelperMessage>,
    }

    return (
        <Wrapper>
            <Field
                name="datetime_picker"
                label={props.label}
                isRequired={props.isRequired}
            >
                {({ fieldProps }) => (
                    <>
                        <DatePicker
                            placeholder={props.placeholder}
                            onChange={handleDate}
                            value={dateValue}
                            dateFormat={props.dateFormat}
                        />

                        {props.showValidation &&
                            validationText[props.validationValue]}
                    </>
                )}
            </Field>
        </Wrapper>
    )
}

addPropertyControls(Datetime_picker, {
    label: {
        type: ControlType.String,
        title: "Label",
    },
    value: {
        type: ControlType.String,
        title: "Value",
    },
    placeholder: {
        type: ControlType.String,
        title: "Placeholder",
    },
    dateFormat: {
        type: ControlType.String,
        title: "Date format",
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
