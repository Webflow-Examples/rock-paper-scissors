import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GameButton.module.css";

export function GameButton({ as: _Component = _Builtin.Link, gameText = "X" }) {
  return (
    <_Component
      className={_utils.cx(_styles, "game-button")}
      button={true}
      options={{
        href: "#",
      }}
    >
      {gameText}
    </_Component>
  );
}
