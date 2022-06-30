import React from "react";
import InstructorCard from "./InstructorCard";

export default function InstructorPage({ dats }) {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {dats.map((dat) => {
        return (
          <InstructorCard
            key={dat.id}
            img={dat.img}
            alt={dat.alt}
            name={dat.name}
            taff={dat.taff}
          />
        );
      })}
    </div>
  );
}
