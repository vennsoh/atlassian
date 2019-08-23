// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  href: ControlDescription;
  target: ControlDescription;
  iconAfter: ControlDescription;
  iconBefore: ControlDescription;
  text: ControlDescription;
  truncationWidth: ControlDescription;
  hasSeparator: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  href: { title: "Href", type: ControlType.String },
  target: {
    title: "Target",
    options: ["", "_blank", "_parent", "_self", "_top"],
    optionTitles: ["", "_blank", "_parent", "_self", "_top"],
    type: ControlType.Enum
  },
  iconAfter: { title: "IconAfter", type: ControlType.String },
  iconBefore: { title: "IconBefore", type: ControlType.String },
  text: { title: "Text", type: ControlType.String },
  truncationWidth: {
    title: "TruncationWidth",
    type: ControlType.Number
  },
  hasSeparator: {
    title: "HasSeparator",
    type: ControlType.Boolean
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
