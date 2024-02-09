import "./App.css";
import { useState } from "react";
import Box from "./Box";
import Play from "./Play";

export default function App() {
  return (
    <div className="App">
      <div className="playable">
        <Play />
      </div>
      <div className="nav">
        <div className="nav-item">All</div>
        <div className="nav-item">Music</div>
        <div className="nav-item">Wrapped</div>
        <div className="nav-item">Podcast</div>
      </div>
      <div className="heading">
        <h1>Today's Biggest Hits</h1>
      </div>
      <div className="box">
        <Box title="Happier Than Ever" />
        <Box title="Blinding Lights" left="200px" />
        <Box title="Perfect" left="380px" />
        <Box title="Shape of You" left="560px" />
        <Box title="Galway Girl" left="740px" />
      </div>
      <div className="heading">
        <h1>Made For You</h1>
      </div>
      <div className="box">
        <Box title="Faded" />
        <Box title="Let Me Love You" left="200px" />
        <Box title="Collections" left="380px" />
        <Box title="Play it Now" left="560px" />
        <Box title="Play Date" left="740px" />
      </div>
      <div className="heading">
        <h1>Recently Played</h1>
      </div>
      <div className="box">
        <Box title="Happier Than Ever" />
        <Box title="Blinding Lights" left="200px" />
        <Box title="Perfect" left="380px" />
        <Box title="Shape of You" left="560px" />
      </div>
      <div className="heading">
        <h1>Unquiely Yours</h1>
      </div>
      <div className="box">
        <Box title="We Dont Talk Anymore" />
        <Box title="Butter" left="200px" />
        <Box title="On My Way" left="380px" />
      </div>
    </div>
  );
}
