import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

export default function Home() {
  const datas = [
    {
      title: "4,000 Online courses",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-7.png",
      alt: "courses",
      id: 1,
    },

    {
      title: "Job placement Support",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-8.png",
      alt: "support",
      id: 2,
    },
    {
      title: "Lifetime Slack chat support",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-9.png",
      alt: "chat",
      id: 3,
    },
    {
      title: "Research an Innovation",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-10.png",
      alt: "research",
      id: 4,
    },
  ];

  return (
    <Homes>
      <div className="block">
        <div className="text-center">
          <h2>Why An Scholercity Out Of The Ordinary</h2>
          <img src="yellow-bg.png" alt="ligne jaune" className="jaune" />
          <p>
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        <div className="grid grid-cols-3">
          {datas.map((data) => {
            return (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                src={data.src}
                alt={data.alt}
              />
            );
          })}
        </div>
      </div>
    </Homes>
  );
}

const Homes = styled.main`
  h2 {
    font-weight: 900;
    font-size: 40px;
    font-family: "Hind", sans-serif;
  }

  .jaune {
    position: relative;
    left: 30%;
  }

  .block {
    padding-left: 150px;
    padding-right: 150px;
  }
`;
