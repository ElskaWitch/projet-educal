import React from "react";
import { BiTimeFive } from "react-icons/bi";

export default function BlogCard({
  img,
  alt,
  cour,
  title,
  teacher,
  altname,
  name,
  date,
  color,
  bgcolor,
}) {
  return (
    <div className="flex ">
      <div className="min-h-[500px] rounded-md shadow-2xl bg-[#fff] ">
        <img className="pb-2 rounded-md" src={img} alt={alt} />
        <div className="px-10 py-5">
          <div className=" pb-10">
            <p
              className={`${bgcolor} ${color}  font-semibold absolute p-1 rounded-md `}
            >
              {cour}
            </p>
          </div>
          <p className=" font-bold pb-7">{title}</p>
          <div className="flex text-[#6d6e75] justify-between items-center">
            <div className="flex gap-4 items-center">
              <img className="rounded-2xl" src={teacher} alt={altname} />
              <p>{name}</p>
            </div>
            <div className="flex items-center">
              <BiTimeFive className="" />
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
