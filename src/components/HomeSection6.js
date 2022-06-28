import React from "react";
import CardSection6 from "./CardSection6";

export default function HomeSection6({ datos }) {
  return (
    <div className="block pb-40 ">
      <div className="text-center">
        <h2>We Are Proud</h2>
        <img src="yellow-bg.png" alt="" />
        <p className="text-[#6d6e75]">
          You don't have to struggle alone, you've got our assistance and help.
        </p>
        <div />
      </div>
      <div className="flex gap-5 pb-40 ">
        {datos.map((dato) => {
          return (
            <CardSection6
              key={dato.id}
              img={dato.img}
              alt={dato.alt}
              number={dato.number}
              text={dato.text}
            />
          );
        })}
      </div>
    </div>
  );
}
