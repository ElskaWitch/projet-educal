import React from "react";

export default function CardSection4({ img, text }) {
  return (
    <div
      className={`${img} h-72 max-w-md bg-cover bg-center bg-no-repeat flex justify-center items-center relative rounded-lg `}
    >
      <div className="bg-gray-900 top-0 left-0 right-0 bottom-0 absolute opacity-50 rounded-lg "></div>

      <p className=" text-[#fff] z-50 text-3xl font-bold p-20 text-center">
        {text}
      </p>
    </div>
  );
}
