import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import Form, {
    Field,
    ErrorMessage,
    HelperMessage,
    ValidMessage,
} from "@atlaskit/form"
import AKTextfield from "@atlaskit/textfield"
import styled from "styled-components"

const Wrapper = styled.div`
  > div {
    margin-top: 0;
  }

  input {
    height: 32px;
  }
`

Textfield.defaultProps = {
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
    value: "",
    onValueChange: () => null,
}

export function Textfield(props) {
    const [textfieldValue, setTextfieldValue] = React.useState(props.value)

    React.useEffect(() => {
        setTextfieldValue(props.value)
    }, [props.value])

    const handleTextfield = event => {
        const { value } = event.target
        setTextfieldValue(value)
        props.onValueChange(value)
    }

    let validationText = {
        error: <ErrorMessage>{props.errorMessage}</ErrorMessage>,
        valid: <ValidMessage> {props.validMessage}</ValidMessage>,
        helper: <HelperMessage> {props.helperMessage}</HelperMessage>,
    }

    return (
        <Wrapper>
            <Field
                name="textfield"
                label={props.label}
                isRequired={props.isRequired}
            >
                {({ fieldProps }) => (
                    <>
                        <AKTextfield
                            {...fieldProps}
                            placeholder={props.placeholder}
                            onChange={handleTextfield}
                            value={textfieldValue}
                        />
                        {props.showValidation &&
                            validationText[props.validationValue]}
                    </>
                )}
            </Field>
        </Wrapper>
    )
}

addPropertyControls(Textfield, {
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
