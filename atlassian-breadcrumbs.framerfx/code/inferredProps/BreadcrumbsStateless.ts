// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  isExpanded: ControlDescription;
  maxItems: ControlDescription;
  itemsBeforeCollapse: ControlDescription;
  itemsAfterCollapse: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  isExpanded: { title: "IsExpanded", type: ControlType.Boolean },
  maxItems: { title: "MaxItems", type: ControlType.Number },
  itemsBeforeCollapse: {
    title: "ItemsBeforeCollapse",
    type: ControlType.Number
  },
  itemsAfterCollapse: { title: "ItemsAfterCollapse", type: ControlType.Number }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
