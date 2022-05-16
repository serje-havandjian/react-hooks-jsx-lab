import React from "react";
import { name, city } from "../data/data.js";

const firebrick ={
  color: "#b22222"
}

function Home() {
  return (
  <div id="home">Home
  <h1 style={firebrick}>{name} is a Web Developer from {city}</h1>
  </div>
  )
}

export default Home;
