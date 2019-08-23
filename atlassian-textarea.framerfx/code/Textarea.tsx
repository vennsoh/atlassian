import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import AKTextarea from "@atlaskit/textarea"
import {
    Field,
    ErrorMessage,
    HelperMessage,
    ValidMessage,
} from "@atlaskit/form"
import styled from "styled-components"

const Wrapper = styled.div`
  > div {
    margin-top: 0;
  }

  input {
    height: 32px;
  }
`

Textarea.defaultProps = {
    width: 240,
    height: 180,
    label: "Label",
    isRequired: false,
    showValidation: true,
    errorMessage: "Error text",
    validMessage: "Valid text",
    helperMessage: "Helper text",
    validationValue: "helper",
    minimumRows: 6,
    placeholder: "Placeholder",
    value: "",
    resize: "auto",
    onValueChange: () => null,
}

export function Textarea(props) {
    const [textareaValue, setTextareaValue] = React.useState(props.value)

    React.useEffect(() => {
        setTextareaValue(props.value)
    }, [props.value])

    const handleTextarea = event => {
        const { value } = event.target
        setTextareaValue(value)
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
                name="textArea"
                label={props.label}
                isRequired={props.isRequired}
            >
                {({ fieldProps }) => (
                    <>
                        <AKTextarea
                            minimumRows={props.minimumRows}
                            resize={props.resize}
                            value={props.value}
                            placeholder={props.placeholder}
                            onChange={handleTextarea}
                        />
                        {props.showValidation &&
                            validationText[props.validationValue]}
                    </>
                )}
            </Field>
        </Wrapper>
    )
}

addPropertyControls(Textarea, {
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
    minimumRows: {
        type: ControlType.Number,
        title: "Minimum rows",
        defaultValue: 6,
        min: 0,
        max: 99,
        step: 1,
        displayStepper: true,
    },
    isRequired: {
        type: ControlType.Boolean,
        title: "Required?",
    },
    resize: {
        type: ControlType.Enum,
        title: "Resize?",
        options: ["auto", "vertical", "horizontal", "smart", "none"],
        optionTitles: ["Auto", "Vertical", "Horizontal", "Smart", "None"],
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
