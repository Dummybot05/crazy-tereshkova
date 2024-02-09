import React from "react";
import "./Box.css";
import img from "./img.png";
import { useState } from "react";

export default function Box(props) {
  const [msg, setMsg] = useState(props.title);
  const [curPlay, setCurPlay] = useState("grayscale(1)");

  function chnMsg() {
    if (msg == props.title) {
      setMsg("Currently Playing");
      setCurPlay("grayscale(0)");
    } else {
      setMsg(props.title);
      setCurPlay("grayscale(1)");
    }
  }
  return (
    <>
      <div
        className="box-image"
        style={{ left: props.left, filter: curPlay }}
        onClick={chnMsg}
      >
        <img src={img} style={{}} />
      </div>
      <div className="box-title" style={{ left: props.left }} onClick={chnMsg}>
        {msg}
      </div>
    </>
  );
}
