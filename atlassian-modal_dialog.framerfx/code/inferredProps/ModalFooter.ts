// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  placeholder: ControlDescription;
  css: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  placeholder: { title: "Placeholder", type: ControlType.String },
  css: { title: "Css", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
