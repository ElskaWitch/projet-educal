import React from "react";
import { FiBook } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";
import { WiDirectionRight } from "react-icons/wi";

export default function CoursesCard({
  cour,
  img,
  alt,
  lesson,
  stars,
  title,
  text,
  teacher,
  altname,
  name,
  price,
  promo,
  color,
  bgcolor,
}) {
  return (
    <div className="pb-10 ">
      <div className=" rounded-lg shadow-2xl flex gap-16 ">
        <div className="">
          <p className={`${bgcolor} text-[#fff] absolute p-1 rounded-lg m-7`}>
            {cour}
          </p>
          <img className="rounded-l-lg h-72" src={img} alt={alt} />
        </div>
        <div className="grid grid-cols-1">
          <div className="flex text-[#6d6e75] gap-10">
            <div className="flex items-center">
              <FiBook />
              <p>{lesson}</p>
            </div>
            <div className="flex items-center">
              <RiStarSFill className="text-[#ff9415]" />
              <p>{stars}</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-2xl pb-5">{title}</h3>
            <p className="text-[#6d6e75]">{text}</p>
          </div>
          <div className="flex items-center">
            <img className="rounded-full" src={teacher} alt={altname} />
            <p className="text-[#6d6e75] font-medium pl-4">{name}</p>
          </div>
          <hr />
          <div className="flex items-center font-bold justify-between">
            <div className="flex items-center">
              <p className={`${color} text-xl pr-1`}>{price}</p>
              <p className="text-[#6d6e75]">{promo}</p>
            </div>
            <div className="flex items-center">
              <p>Know Details</p>
              <WiDirectionRight className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
