import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "@atlaskit/css-reset"
import AKToggle from "@atlaskit/toggle"
import styled from "styled-components"

const Wrapper = styled.div`   
    label > div {
    width: 40px
    height: 100%
    }
`

Toggle.defaultProps = {
    width: 44,
    height: 28,
}

export function Toggle() {
    return (
        <Wrapper>
            <AKToggle />
        </Wrapper>
    )
}
