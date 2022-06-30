import React from "react";

export default function InstructorCard({ img, alt, name, taff }) {
  return (
    <div className="bg-[#f3f4f8] mx-10">
      <div className="px-10 py-10">
        <img src={img} alt={alt} className="h-96" />
      </div>
      <div className="flex ">
        <p className="font-bold"> {name}</p>
        <p className="text-[#6d6e75]">{taff}</p>
      </div>
    </div>
  );
}
