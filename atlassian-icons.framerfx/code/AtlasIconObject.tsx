import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import Icon from "@atlaskit/icon-object";

type Props = {
  iconName: string;
  size: string;
};

export function AtlasIconObject(props: Props) {
  const [myIcon, setIcon] = React.useState(null);

  let iconName = props.iconName + "/" + props.size;

  React.useEffect(() => {
    async function loader() {
      const icon = await import(`@atlaskit/icon-object/glyph/${iconName}.js`);

      return icon;
    }

    loader().then(x => {
      setIcon(x.default);
    });

    return () => {};
  }, [iconName]);

  return (
    <Icon
      dangerouslySetGlyph={
        myIcon !== null || undefined ? myIcon.props.dangerouslySetGlyph : null
      }
    />
  );
}

// Set default properties
AtlasIconObject.defaultProps = {
  width: 24,
  height: 24,
  iconName: "blog",
  size: "24"
};

addPropertyControls(AtlasIconObject, {
  iconName: { type: ControlType.String, title: "Logo Name" },
  size: {
    type: ControlType.Enum,
    title: "size",
    options: ["16", "24"],
    optionTitles: ["16", "24"]
  }
});
