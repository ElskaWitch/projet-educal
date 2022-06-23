import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <Heros>
      <div className="grid grid-cols-2">
        <div className="texthero">
          <h1>Launch your Own online learning Platform</h1>
          <img src="yellow-bg.png" alt="ligne jaune" className="jaune" />
          <h2>unlimited access to all 60+ instructors.</h2>
          <p>2 passes (with acces to all classes) for $240</p>
        </div>
        <div className="">
          <img src="hero.png" alt="étudiante" className="etudiante" />
          <img
            src="hero-shape-purple.png"
            alt="tache purple"
            className="purple"
          />
        </div>
      </div>
    </Heros>
  );
}
const Heros = styled.div`
  background-color: #b8dde3;

  h1,
  h2 {
    font-weight: 900;
  }
  h1 {
    font-size: 40px;
    font-family: "Hind", sans-serif;
  }

  .texthero {
    padding-left: 150px;
    padding-top: 50%;
  }

  .purple {
    position: absolute;
    top: 355px;
    z-index: 10;
  }
  .etudiante {
    position: relative;
    z-index: 55;
  }
`;
