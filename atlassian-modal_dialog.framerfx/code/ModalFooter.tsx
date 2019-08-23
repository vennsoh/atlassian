import * as React from "react";
import * as System from "@atlaskit/modal-dialog";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/ModalFooter";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

function ModalFooter(props) {
  return <System.ModalFooter {...props} style={style} />;
}

ModalFooter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ModalFooter, {
  placeholder: merge(controls.placeholder, {}),
  css: merge(controls.css, {})
});
