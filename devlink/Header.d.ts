import * as React from "react";
import * as Types from "./types";

declare function Header(props: {
  as?: React.ElementType;
  homeText?: React.ReactNode;
  homeLink?: Types.Basic.Link;
  historyText?: React.ReactNode;
  historyLink?: Types.Basic.Link;
  cultureText?: React.ReactNode;
  cultureLink?: Types.Basic.Link;
  strategyText?: React.ReactNode;
  strategyMath?: Types.Basic.Link;
  playLink?: Types.Basic.Link;
  playText?: React.ReactNode;
  brandLink?: Types.Basic.Link;
}): React.JSX.Element;
