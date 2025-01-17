import React, { useEffect, useRef, useState } from "react";
import devModelCSS from "../styles/Devs.module.css";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";

export default function DeveloperCard(props) {
  const onMouseOver = (e) => {
    const element = e.currentTarget;
    const cont = element.querySelector("#devCardCont");
    const links = cont.querySelector("#devCardLinks");
    element.style.transform = "scale(1.1)";
    element.style.opacity = "1";
    element.style.animation = `${devModelCSS.scaleUp} .3s ease-in`;
    cont.style.transform = "translateY(0)";
    cont.style.animation = `${devModelCSS.showLinks} .3s ease-in`;
    links.style.visibility = "visible";
  };

  const onMouseOut = (e) => {
    const element = e.currentTarget;
    const cont = element.querySelector("#devCardCont");
    const links = cont.querySelector("#devCardLinks");
    element.style.transform = "scale(1)";
    element.style.opacity = "1";
    element.style.animation = `${devModelCSS.scaleDown} .3s ease-in`;
    cont.style.transform = "translateY(50%)";
    cont.style.animation = `${devModelCSS.hideLinks} .3s ease-in`;
    links.style.visibility = "hidden";
  };

  return (
    <div
      className={devModelCSS.devCard}
      id="devCard"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img src={props.dev.img} alt="" />
      <div className={devModelCSS.devCardGrad}></div>
      <div className={devModelCSS.devCardCont} id="devCardCont">
        <div className={devModelCSS.devCardName}>{props.dev.name}</div>

        <div className={devModelCSS.devCardName}>{props.dev.Designation}</div>
        <div className={devModelCSS.devCardName}>{props.dev.Dept}</div>

        <div className={devModelCSS.devCardLinks} id="devCardLinks">
          {props.dev.github !== "" ? <Github github={props.dev.linkedin} /> : ""}
          {props.dev.linkedin !== "" ? (
            <Linkedin linkedin={props.dev.linkedin} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
