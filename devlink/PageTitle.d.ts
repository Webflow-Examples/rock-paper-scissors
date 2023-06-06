import * as React from "react";
import * as Types from "./types";

declare function PageTitle(props: {
  as?: React.ElementType;
  headingTitle?: React.ReactNode;
  hidden?: Types.Visibility.VisibilityConditions;
  pageSummary?: React.ReactNode;
}): React.JSX.Element;
