import React from "react";

export default function HomeSection7() {
  return (
    <div className="pb-40">
      <div className="text-center bg-[url('../public/blog-5.jpg')] h-96  bg-cover bg-center bg-no-repeat flex justify-center items-center relative ">
        <div className="bg-[#3b60ff] top-0 left-0 right-0 bottom-0 absolute opacity-50 rounded-lg "></div>
        <div className="text-[#ffffff] z-50 font-medium ">
          <div className="z-50 pb-5">
            <img
              className="rounded-full relative left-60 "
              src="testi-1.jpg"
              alt="teacher"
            />
          </div>
          <p className="pb-5">
            "Barmy loo sloshed porkiesdo with me down the pub say bubble and
            squeak."
          </p>
          <p className="pb-5">Jason Response</p>
          <p className="font-normal text-[#d7d9e3]">UX Designer</p>
        </div>
      </div>
    </div>
  );
}
