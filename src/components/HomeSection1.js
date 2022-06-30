import React from "react";
import CardCours from "./Card";

export default function HomeSection1({ datas }) {
  return (
    <div className="block px-10  md:px-[150px]">
      <div className="text-center pt-40 pb-20">
        <h2>Why An Scholercity Out Of The Ordinary</h2>
        <img src="yellow-bg.png" alt="ligne jaune" className="jaune" />
        <p className="text-[#6d6e75]">
          You don't have to struggle alone, you've got our assistance and help.
        </p>
      </div>
      <div className="md:flex gap-5 pb-40 ">
        {datas.map((data) => {
          return (
            <CardCours
              key={data.id}
              title={data.title}
              description={data.description}
              src={data.src}
              alt={data.alt}
              bgcolor={data.bgcolor}
            />
          );
        })}
      </div>
    </div>
  );
}
