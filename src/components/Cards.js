import React from "react";
import styled from "styled-components";
import { FiBook } from "react-icons/fi";
import { WiDirectionRight } from "react-icons/wi";

export default function CardsCours({
  sujet,
  src,
  alt,
  lesson,
  title,
  portrait,
  person,
  name,
  price,
  promo,
  bgcolors,
  color,
}) {
  return (
    <CardContainers>
      <div className="md:min-h-[500px]  rounded-md shadow-2xl bg-[#fff]">
        <div className="sujet">
          <p className={`${bgcolors} text-[#f3f4f8] rounded-lg p-1 `}>
            {sujet}
          </p>
        </div>
        <img className="img pb-9 rounded-t-md" src={src} alt={alt} />
        <div className="contenux md:px-[35px]">
          <div className="flex items-center gap-2 text-[#6d6e75] pb-2">
            <FiBook />
            <p>{lesson}</p>
          </div>
          <h3 className="text-xl font-bold pb-4">{title}</h3>
          <div className="flex gap-5 font-medium items-center pb-5">
            <img className="rounded-2xl" src={portrait} alt={person} />
            <p className="text-[#6d6e75]">{name}</p>
          </div>
          <hr />
          <div className="flex gap-14 pt-3 items-center">
            <p className={`${color} font-bold pr-2`}>
              {price}
              <span className="line-through text-[#6d6e75] text-xs ">
                {promo}
              </span>
            </p>
            <p className="font-semibold">Know Details</p>
            <WiDirectionRight className="text-4xl fleche" />
          </div>
        </div>
      </div>
    </CardContainers>
  );
}

const CardContainers = styled.main`
  /* .contenu {
    padding-left: 35px;
    padding-right: 35px;
  } */
  .sujet {
    position: absolute;
    z-index: 50;
    padding: 10px;
  }
  .img {
    position: relative;
    z-index: 10;
  }
  .fleche {
    position: relative;
    left: -40px;
  }
`;
