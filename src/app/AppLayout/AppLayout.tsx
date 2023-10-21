import * as React from 'react';
import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import {
  Nav,
  NavList,
  NavItem,
  NavExpandable,
  Page,
  PageSidebar,
  PageSidebarBody,
  Text,
  SkipToContent,
  Avatar,
  Flex,
  FlexItem, Masthead, MastheadMain, MastheadToggle, PageToggleButton
} from "@patternfly/react-core";
import { routes, IAppRoute, IAppRouteGroup } from '@app/routes';
import logo from '@app/images/jvilaca.png';

import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';
import '@patternfly/react-styles/css/utilities/Text/text.css';
import { css } from "@patternfly/react-styles";

import styles from '@app/AppLayout/AppLayout.module.css';
import '@app/AppLayout/AppLayout.css';
import { BarsIcon } from "@patternfly/react-icons";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [isMobileView, setIsMobileView] = React.useState(true);
  const [isNavOpenMobile, setIsNavOpenMobile] = React.useState(false);
  const onNavToggleMobile = () => {
    setIsNavOpenMobile(!isNavOpenMobile);
  };
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };

  function LogoImg() {
    const history = useHistory();
    function handleClick() {
      history.push('/');
    }
    return (
      <>
        <Avatar onClick={handleClick} src={logo} size="md" alt="website logo" />
        <Text onClick={handleClick} className="pf-v5-u-ml-md pf-v5-u-color-light-100">João Vilaça - Software Engineer @ Red Hat</Text>
      </>
    );
  }

  const Header = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            variant="plain"
            aria-label="Global navigation"
            isSidebarOpen={isNavOpen}
            onSidebarToggle={isMobileView ? onNavToggleMobile : onNavToggle}
            id="vertical-nav-toggle"
          >
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <LogoImg />
      </MastheadMain>
    </Masthead>
  );

  const location = useLocation();

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem
      key={`${route.label}-${index}`}
      id={`${route.label}-${index}`}
      isActive={route.path === location.pathname}
      onClick={() => setIsNavOpenMobile(false)}
    >
      <NavLink exact={route.exact} to={route.path}>
        {route.label}
      </NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map((route, idx) => route.label && renderNavItem(route, idx))}
    </NavExpandable>
  );

  const Navigation = (
    <Nav className={css(styles.h100)} id="nav-primary-simple" theme="dark">
      <Flex className={css(styles.h100)} direction={{ default: "column" }} justifyContent={{ default: 'justifyContentSpaceBetween' }}>
        <FlexItem>
          <NavList id="nav-list-simple">
            {
              routes
                .filter(route => route.label && (route.routes || route.sidebar == "top"))
                .map((route, idx) => !route.routes ? renderNavItem(route, idx) : renderNavGroup(route, idx))
            }
          </NavList>
        </FlexItem>
        <FlexItem>
          <NavList id="nav-list-simple">
            {
              routes
                .filter(route => route.label && (route.routes || route.sidebar == "bottom"))
                .map((route, idx) => !route.routes ? renderNavItem(route, idx) : renderNavGroup(route, idx))
            }
          </NavList>
        </FlexItem>
      </Flex>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar
      className={css(styles.h100)}
      theme="dark"
      isSidebarOpen={isMobileView ? isNavOpenMobile : isNavOpen}
    >
      <PageSidebarBody>
        {Navigation}
      </PageSidebarBody>
    </PageSidebar>
  );

  const pageId = 'primary-app-container';

  const PageSkipToContent = (
    <SkipToContent onClick={(event) => {
      event.preventDefault();
      const primaryContentContainer = document.getElementById(pageId);
      primaryContentContainer && primaryContentContainer.focus();
    }} href={`#${pageId}`}>
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId={pageId}
      header={Header}
      sidebar={Sidebar}
      onPageResize={(_e, object: { mobileView: boolean; windowSize: number }) => onPageResize(object)}
      skipToContent={PageSkipToContent}>
      {children}
    </Page>
  );
};

export { AppLayout };
