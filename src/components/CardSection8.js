import React from "react";
import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";

export default function CardSection8({
  img,
  alt,
  cours,
  titre,
  teacher,
  altname,
  prenom,
  date,
  bgcolor,
  color,
}) {
  return (
    <CardSection8s>
      <div className="min-h-[500px]  rounded-md shadow-2xl bg-[#fff] ">
        <img className="pb-2 rounded-md" src={img} alt={alt} />
        <div className="p-5">
          <p className={`${bgcolor} ${color} pb-3 font-semibold `}>{cours}</p>
          <p className=" font-bold pb-7">{titre}</p>
          <div className="flex text-[#6d6e75] gap-14 items-center">
            <div className="flex gap-4">
              <img className="rounded-2xl" src={teacher} alt={altname} />
              <p>{prenom}</p>
            </div>
            <BiTimeFive className="" />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </CardSection8s>
  );
}

const CardSection8s = styled.main``;
