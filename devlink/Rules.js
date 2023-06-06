import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Rules.module.css";

export function Rules({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "rules")}
      tag="section"
    >
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading tag="h1">{"The rules"}</_Builtin.Heading>
        <_Builtin.List
          className={_utils.cx(_styles, "rules-list")}
          tag="ul"
          unstyled={false}
        >
          <_Builtin.ListItem>{"Rock beats Scissors."}</_Builtin.ListItem>
          <_Builtin.ListItem>{"Scissors beats paper."}</_Builtin.ListItem>
          <_Builtin.ListItem>{"Paper beats Rock."}</_Builtin.ListItem>
          <_Builtin.ListItem>{"That's all"}</_Builtin.ListItem>
        </_Builtin.List>
      </_Builtin.Container>
    </_Component>
  );
}
