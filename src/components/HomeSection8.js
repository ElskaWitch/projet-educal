import React from "react";
import CardSection8 from "./CardSection8";

export default function HomeSection8({ dattos }) {
  return (
    <div className="block">
      <div className="text-center">
        <h2>We Share Our Thoughts On Design</h2>
        <img src="yellow-bg.png" alt="" />
        <p className="text-[#6d6e75] pb-20">
          You don't have to struggle alone, you've got our assistance and help.
        </p>
      </div>
      <div className="flex gap-5 pb-40 ">
        {dattos.map((datto) => {
          return (
            <CardSection8
              key={datto.id}
              img={datto.img}
              alt={datto.alt}
              cours={datto.cours}
              titre={datto.titre}
              teacher={datto.teacher}
              altname={datto.altname}
              prenom={datto.prenom}
              date={datto.date}
              bgcolor={datto.bgcolor}
              color={datto.color}
            />
          );
        })}
      </div>
    </div>
  );
}
