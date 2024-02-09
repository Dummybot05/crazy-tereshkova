import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import img from "./img.png";

export default function Play() {
  const [count, setCount] = useState(faPlay);

  function chn() {
    if (count == faPlay) {
      setCount(faPause);
    } else {
      setCount(faPlay);
    }
  }
  return (
    <>
      <div className="playable-image">
        <img src={img} />
      </div>
      <div className="playable-title">Blinding Lights</div>
      <div className="playable-play" onClick={chn}>
        <FontAwesomeIcon icon={count} />
      </div>
    </>
  );
}
