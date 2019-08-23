import * as React from "react";
import * as System from "@atlaskit/breadcrumbs";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/BreadcrumbsStateless";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

function BreadcrumbsStateless(props) {
  return <System.BreadcrumbsStateless {...props} style={style} />;
}

BreadcrumbsStateless.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BreadcrumbsStateless, {
  isExpanded: merge(controls.isExpanded, {}),
  maxItems: merge(controls.maxItems, {}),
  itemsBeforeCollapse: merge(controls.itemsBeforeCollapse, {}),
  itemsAfterCollapse: merge(controls.itemsAfterCollapse, {})
});
