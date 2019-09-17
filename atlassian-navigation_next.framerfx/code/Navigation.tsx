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

export function Navigation() {
  const AppSwitcherComponent = props => (
    <GlobalItem
      {...props}
      icon={AppSwitcherIcon}
      id="test"
      onClick={() => console.log("AppSwitcher clicked")}
    />
  );

  const SearchTooltip = () => (
    <div style={{ background: "red" }}> Search Tooltip</div>
  );

  const MyGlobalNavigation = () => (
    <GlobalNavigation
      productIcon={() => <AtlassianIcon size="medium" />}
      onProductClick={() => console.log("product clicked")}
      searchTooltip={<SearchTooltip />}
      onCreateClick={() => console.log("create clicked")}
      onSearchClick={() => console.log("search clicked")}
      onStarredClick={() => console.log("starred clicked")}
      onHelpClick={() => console.log("help clicked")}
      helpItems={() => <div />}
      onNotificationClick={() => console.log("notification clicked")}
      appSwitcherComponent={AppSwitcherComponent}
      appSwitcherTooltip="Switch to ..."
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
            <Item text="Dashboard" />
            <Item text="Things" />
            <Item text="Settings" />
            <Separator />
            <GroupHeading>Add-ons</GroupHeading>
            <Item text="My plugin" />
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
      >
        <div style={{ padding: "32px 40px" }}>Page content goes here.</div>
      </LayoutManager>
    </NavigationProvider>
  );
}

Navigation.defaultProps = {
  height: 710,
  width: 1152
};
