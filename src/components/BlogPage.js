import React from "react";
import BlogCard from "./BlogCard";
import { WiDirectionRight } from "react-icons/wi";
import { WiDirectionLeft } from "react-icons/wi";
import { BiSearch } from "react-icons/bi";

export default function BlogPage({ dattis }) {
  return (
    <div className="">
      <div className="flex">
        <div className="grid grid-cols-2 gap-5 pl-40 pr-20 pb-14 ">
          {dattis.map((datti) => {
            return (
              <BlogCard
                key={datti.id}
                img={datti.img}
                alt={datti.alt}
                cour={datti.cour}
                title={datti.title}
                teacher={datti.teacher}
                altname={datti.altname}
                name={datti.name}
                date={datti.date}
                bgcolor={datti.bgcolor}
                color={datti.color}
              />
            );
          })}
        </div>
        <div className="pr-20">
          <div className="flex items-center">
            <input
              type="text"
              className="bg-[#edeef3] p-2 rounded-md"
              placeholder="Search for courses..."
            />
            <BiSearch />
          </div>
          <div>
            <h2 className="font-bold pt-10 pb-2">Recent posts</h2>
            <hr />
            <div className="flex items-center">
              <img src="blog-sm-1.jpg" alt="blog" className="pt-5" />
              <div className="pl-5">
                <p className="text-[#53545b]">October 15, 2021</p>
                <p className="font-bold">The Importance intrinsic Motivation</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold pt-10 pb-2">Category</h2>
            <hr />
            <ul>
              <li className="pb-3 pt-3">Category</li>
              <li className="pb-3">Video & Tips (4)</li>
              <li className="pb-3">Education (8)</li>
              <li className="pb-3">Business (5)</li>
              <li>UX Design (3)</li>
            </ul>
          </div>
        </div>
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
