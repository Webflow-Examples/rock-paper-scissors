import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({
  as: _Component = _Builtin.Block,
  homeText = "Home",

  homeLink = {
    href: "#",
  },

  historyText = "History",

  historyLink = {
    href: "#",
  },

  cultureText = "Cultural Impact",

  cultureLink = {
    href: "#",
  },

  strategyText = "Strategy & Math",

  strategyMath = {
    href: "#",
  },

  playLink = {
    href: "#",
  },

  playText = "Play now",

  brandLink = {
    href: "#",
  },
}) {
  return (
    <_Component tag="header">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar")}
        tag="div"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container", "nav")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "brand")}
            options={brandLink}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "rps-logo")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/647e0a7cdf24233be935e40d/647e2b06321139f9a87f4c82_rps-logo.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.List
              className={_utils.cx(_styles, "nav-list")}
              tag="ul"
              unstyled={false}
            >
              <_Builtin.ListItem>
                <_Builtin.NavbarLink
                  className={_utils.cx(_styles, "nav-link")}
                  options={homeLink}
                >
                  {homeText}
                </_Builtin.NavbarLink>
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                <_Builtin.NavbarLink
                  className={_utils.cx(_styles, "nav-link")}
                  options={historyLink}
                >
                  {historyText}
                </_Builtin.NavbarLink>
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                <_Builtin.NavbarLink
                  className={_utils.cx(_styles, "nav-link")}
                  options={cultureLink}
                >
                  {cultureText}
                </_Builtin.NavbarLink>
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                <_Builtin.NavbarLink
                  className={_utils.cx(_styles, "nav-link")}
                  options={strategyMath}
                >
                  {strategyText}
                </_Builtin.NavbarLink>
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-invert--nav")}
                  button={true}
                  options={playLink}
                >
                  {playText}
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu")}
            tag="div"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
