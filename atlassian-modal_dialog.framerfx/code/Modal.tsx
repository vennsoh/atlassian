import * as React from "react";
// import * as System from "@atlaskit/modal-dialog";
import ModalDialog, { ModalTransition } from "@atlaskit/modal-dialog";
import {
  ControlType,
  PropertyControls,
  addPropertyControls,
  Frame,
  RenderTarget
} from "framer";
import { controls, merge } from "./inferredProps/ModalBody";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Modal(props) {
  if (RenderTarget.current() == RenderTarget.canvas) {
    return <Frame />;
  }

  if (RenderTarget.current() == RenderTarget.preview) {
    return (
      <ModalTransition>
        <ModalDialog heading="Hi there 👋" />
      </ModalTransition>
    );
  }
}

Modal.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Modal, {});
