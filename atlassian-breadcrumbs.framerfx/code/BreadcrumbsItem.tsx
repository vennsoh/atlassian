import * as React from "react";
import * as System from "@atlaskit/breadcrumbs";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/BreadcrumbsItem";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Breadcrumbs(props) {
  return (
    <System.BreadcrumbsStateless style={style}>
      {props.items.map(item => {
        return React.createElement(System.BreadcrumbsItem, {
          text: item,
          truncationWidth: props.truncationWidth
        });
      })}
    </System.BreadcrumbsStateless>
  );
}

Breadcrumbs.defaultProps = {
  width: 150,
  height: 20
};

addPropertyControls(Breadcrumbs, {
  truncationWidth: merge(controls.truncationWidth, {
    defaultValue: 50,
    min: 1,
    max: 75
  }),
  items: {
    type: ControlType.Array,
    title: "Breadcrumbs",
    propertyControl: { type: ControlType.String },
    defaultValue: ["Page 1", "Page 2"]
  }
});
