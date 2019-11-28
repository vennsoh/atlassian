import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import { CheckboxField } from "@atlaskit/form"
import { Checkbox as AKCheckbox } from "@atlaskit/checkbox"
import styled from "styled-components"

const Wrapper = styled.div`
  > div {
    margin-top: 0;
  }

  input,
  label {
    cursor: pointer;
  }
`

Checkbox.defaultProps = {
    width: 240,
    height: 25,
    label: "Checkbox",
    isRequired: true,
    isChecked: false,
    isDisabled: false,
    isInvalid: false,
    isIndeterminate: false,
    onValueChange: () => null,
}

export function Checkbox(props) {
    const [checkboxValue, setCheckboxValue] = React.useState(props.isChecked)

    React.useEffect(() => {
        if (checkboxValue !== props.isChecked) {
            setCheckboxValue(props.isChecked)
        }
    }, [props.isChecked])

    const flipCheck = () => {
        props.onValueChange(!checkboxValue)
        setCheckboxValue(!checkboxValue)
    }

    return (
        <Wrapper>
            <CheckboxField name="checkbox" isRequired={props.isRequired}>
                {({ fieldProps }) => (
                    <AKCheckbox
                        {...fieldProps}
                        label={props.label}
                        isChecked={checkboxValue}
                        isDisabled={props.isDisabled}
                        isInvalid={props.isInvalid}
                        isIndeterminate={props.isIndeterminate}
                        onChange={flipCheck}
                    />
                )}
            </CheckboxField>
        </Wrapper>
    )
}

addPropertyControls(Checkbox, {
    label: {
        type: ControlType.String,
        title: "Label",
    },
    isChecked: {
        type: ControlType.Boolean,
        title: "Checked?",
        defaultValue: false,
    },
    isDisabled: {
        type: ControlType.Boolean,
        title: "Disabled?",
    },
    isInvalid: {
        type: ControlType.Boolean,
        title: "Invalid?",
    },
    isIndeterminate: {
        type: ControlType.Boolean,
        title: "Indeterminate?",
    },
    isRequired: {
        type: ControlType.Boolean,
        title: "Required?",
    },
})
