import React from "react";
import CoursesCard from "./CoursesCard";
import { WiDirectionRight } from "react-icons/wi";
import { WiDirectionLeft } from "react-icons/wi";

export default function CoursesPage({ datis }) {
  return (
    <div className="">
      <div className="pb-5 pt-20 px-36 ">
        {datis.map((dati) => {
          return (
            <CoursesCard
              key={dati.id}
              cour={dati.cour}
              img={dati.img}
              alt={dati.alt}
              lesson={dati.lesson}
              stars={dati.stars}
              title={dati.title}
              text={dati.text}
              teacher={dati.teacher}
              altname={dati.altname}
              name={dati.name}
              price={dati.price}
              promo={dati.promo}
              bgcolor={dati.bgcolor}
              color={dati.color}
            />
          );
        })}
      </div>
      <div className="flex gap-7 px-40 pb-32 items-center">
        <div className="flex items-center gap-1">
          <WiDirectionLeft className="text-xl" />
          <p>Prev</p>
        </div>
        <div className="">
          <button className="px-3 ">1</button>
          <button className="px-3 rounded-md border-solid border-2 border-[#2b4eff] bg-[#2b4eff] text-[#fff]">
            2
          </button>
          <button className="px-3">3</button>
        </div>
        <div className="flex items-center ">
          <p>Next</p>
          <WiDirectionRight className="text-3xl" />
        </div>
      </div>
    </div>
  );
}
