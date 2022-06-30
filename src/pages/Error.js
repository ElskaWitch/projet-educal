import React from "react";
import NavCourses from "../components/NavCourses";

export default function Error() {
  return (
    <div>
      <NavCourses />
      <div className="bg-[url('../public/error.avif')] z-10  h-[800px]  bg-cover bg-center bg-no-repeat flex  relative bottom-20">
        <div className="bg-[#0c0831] top-0 left-0 right-0 bottom-0 absolute opacity-50 rounded-lg "></div>
        <div className="text-[#fff] font-bold md:pl-[580px] pt-60 relative z-20 text-3xl ">
          <h1 className="font-bold">ERROR 404, ARE YOU LOST ?</h1>
        </div>
      </div>
    </div>
  );
}
