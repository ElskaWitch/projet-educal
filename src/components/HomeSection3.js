import React from "react";
import CardsCours from "./Cards";

export default function HomeSection3({ dattas }) {
  return (
    <div className="bg-[#edeef3]">
      <div className="block py-40">
        <div className="flex space-x-60 items-end">
          <div>
            <h2>Find The Right Online Course For You</h2>
            <img src="yellow-bg.png" alt="" />
            <p className="text-[#6d6e75]">
              You don't have to struggle alone, you've got our assistance and
              help.
            </p>
          </div>
          <div className="">
            <ul className="flex ">
              <li>See all</li>
              <li>Trending</li>
              <li>Popularity</li>
              <li>Featured</li>
              <li>Art & Design</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 pt-10 ">
          {dattas.map((datta) => {
            return (
              <CardsCours
                key={datta.id}
                sujet={datta.sujet}
                src={datta.src}
                alt={datta.alt}
                lesson={datta.lesson}
                title={datta.title}
                portrait={datta.portrait}
                person={datta.person}
                name={datta.name}
                price={datta.price}
                promo={datta.promo}
                bgcolors={datta.bgcolors}
                color={datta.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
