import * as React from "react";
import * as System from "@atlaskit/modal-dialog";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/ModalHeader";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

function ModalHeader(props) {
  return <System.ModalHeader {...props} style={style} />;
}

ModalHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ModalHeader, {
  placeholder: merge(controls.placeholder, {}),
  css: merge(controls.css, {})
});
