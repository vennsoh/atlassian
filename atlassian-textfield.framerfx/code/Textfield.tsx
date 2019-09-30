import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
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

type Props = {
    width: number
    height: number
    label: string
    isRequired: boolean
    showValidation: boolean
    type: string
    placeholder: string
    errorMessage: string
    validMessage: string
    helperMessage: string
    validationValue: string
    value: string
    backgroundColor: string
    onValueChange: (value: string) => void
}

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
    backgroundColor: "transparent",
    onValueChange: () => null,
}

export function Textfield(props: Props) {
    const {
        label,
        isRequired,
        showValidation,
        type,
        placeholder,
        errorMessage,
        validMessage,
        helperMessage,
        validationValue,
        onValueChange,
        value,
    } = props

    const [textfieldValue, setTextfieldValue] = React.useState(value)

    React.useEffect(() => {
        setTextfieldValue(value)
    }, [value])

    const handleTextfield = event => {
        const { value } = event.target
        setTextfieldValue(value)
        onValueChange(value)
    }

    let validationText = {
        error: <ErrorMessage>{errorMessage}</ErrorMessage>,
        valid: <ValidMessage> {validMessage}</ValidMessage>,
        helper: <HelperMessage> {helperMessage}</HelperMessage>,
    }

    return (
        <Frame {...props}>
            <Wrapper>
                <Field
                    name="textfield"
                    label={label}
                    isRequired={props.isRequired}
                >
                    {({ fieldProps }) => (
                        <>
                            <AKTextfield
                                {...fieldProps}
                                type={type}
                                placeholder={placeholder}
                                onChange={handleTextfield}
                                value={textfieldValue}
                            />
                            {showValidation && validationText[validationValue]}
                        </>
                    )}
                </Field>
            </Wrapper>
        </Frame>
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
    type: {
        type: ControlType.Enum,
        title: "Type",
        options: [
            "date",
            "email",
            "number",
            "password",
            "search",
            "tel",
            "text",
            "time",
            "url",
            "week",
        ],
        optionTitles: [
            "Date",
            "Email",
            "Number",
            "Password",
            "Phone",
            "Search",
            "Text",
            "Time",
            "URL",
            "Week",
        ],
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
