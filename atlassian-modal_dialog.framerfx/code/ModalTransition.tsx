import * as React from "react";
import * as System from "@atlaskit/modal-dialog";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/ModalTransition";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

function ModalTransition(props) {
  return <System.ModalTransition {...props} style={style} />;
}

ModalTransition.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ModalTransition, {
  children: merge(controls.children, {})
});
