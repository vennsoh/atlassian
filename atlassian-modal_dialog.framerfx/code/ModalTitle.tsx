import * as React from "react";
import * as System from "@atlaskit/modal-dialog";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/ModalTitle";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

function ModalTitle(props) {
  return <System.ModalTitle {...props} style={style} />;
}

ModalTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ModalTitle, {
  placeholder: merge(controls.placeholder, {}),
  css: merge(controls.css, {})
});
