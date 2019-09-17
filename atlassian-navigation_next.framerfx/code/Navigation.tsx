import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

import {
  GroupHeading,
  GlobalItem,
  HeaderSection,
  Item,
  LayoutManager,
  MenuSection,
  NavigationProvider,
  Separator,
  Wordmark
} from "@atlaskit/navigation-next";

import GlobalNavigation from "@atlaskit/global-navigation";
import { AtlassianIcon, AtlassianWordmark } from "@atlaskit/logo";

import AppSwitcherIcon from "@atlaskit/icon/glyph/app-switcher";

export function Navigation(props) {
  const AppSwitcherComponent = props => (
    <GlobalItem
      {...props}
      icon={AppSwitcherIcon}
      id="test"
      onClick={() => console.log("AppSwitcher clicked")}
    />
  );

  const MyGlobalNavigation = () => (
    <GlobalNavigation
      productIcon={() => <AtlassianIcon size="medium" />}
      onProductClick={() => console.log("product clicked")}
      onCreateClick={() => console.log("create clicked")}
      onSearchClick={() => console.log("search clicked")}
      onStarredClick={() => console.log("starred clicked")}
      onHelpClick={() => console.log("help clicked")}
      helpItems={() => <div />}
      onNotificationClick={() => console.log("notification clicked")}
      appSwitcherComponent={AppSwitcherComponent}
      onSettingsClick={() => console.log("settings clicked")}
      // loginHref="#login"
    />
  );

  const MyProductNavigation = () => (
    <>
      <HeaderSection>
        {({ className }) => (
          <div className={className}>
            <Wordmark wordmark={AtlassianWordmark} />
          </div>
        )}
      </HeaderSection>
      <MenuSection>
        {({ className }) => (
          <div className={className}>
            {props.menuItems.map((item, index) => {
              return <Item text={item} />;
            })}

            {props.menuFooter && (
              <>
                <Separator />
                <GroupHeading>Add-ons</GroupHeading>
                <Item text="My plugin" />
              </>
            )}
          </div>
        )}
      </MenuSection>
    </>
  );

  return (
    <NavigationProvider>
      <LayoutManager
        globalNavigation={MyGlobalNavigation}
        productNavigation={MyProductNavigation}
        containerNavigation={null}
      />
    </NavigationProvider>
  );
}

addPropertyControls(Navigation, {
  menuItems: {
    type: ControlType.Array,
    title: "Menu Items",
    defaultValue: ["Dashboard", "Things", "Settings"],
    propertyControl: {
      type: ControlType.String
    }
  },
  menuFooter: {
    type: ControlType.Boolean,
    title: "Menu Footer",
    defaultValue: true,
    enabledTitle: "Show",
    disabledTitle: "Hide"
  }
});

Navigation.defaultProps = {
  height: 710,
  width: 340
};
