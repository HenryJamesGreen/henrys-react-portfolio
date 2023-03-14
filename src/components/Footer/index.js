import { style } from "@mui/system";
import React from "react";
import "./style.css";
import { Style } from "@mui/icons-material";

function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}></div>
      <span>Henry Green 2023</span>
    </div>
  );
}

export default Footer;
