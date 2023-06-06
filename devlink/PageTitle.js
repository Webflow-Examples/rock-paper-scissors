import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageTitle.module.css";

export function PageTitle({
  as: _Component = _Builtin.Section,
  headingTitle = "History",
  hidden = true,
  pageSummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "home", "page")}
      tag="section"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "page-heading")}
          tag="h1"
        >
          {headingTitle}
        </_Builtin.Heading>
        {hidden ? (
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "page-heading-summary")}
          >
            {pageSummary}
          </_Builtin.Paragraph>
        ) : null}
      </_Builtin.Container>
    </_Component>
  );
}
