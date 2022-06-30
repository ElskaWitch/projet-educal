import React from "react";
import CardSection4 from "./CardSection4";

export default function HomeSection4() {
  let bgImage1 = "bg-[url('../public/what-1.jpg')]";
  let bgImage2 = "bg-[url('../public/what-2.jpg')]";

  return (
    <div className="blockx md:px-[150px] pt-40">
      <div className="text-center ">
        <h2>What Is Skilline ?</h2>
        <img src="yellow-bg.png" alt="" />
        <p className="text-[#6d6e75]">
          Sloshed faff about old mucker blattant bubble and squeak hanky panky
          some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered
          smashing blow off I'm telling up the kyver he legged it bleeder jolly
          good.
        </p>
      </div>
      <div className="md:flex gap-5 pb-40 pt-14 relative md:left-40">
        <CardSection4 img={bgImage1} text="Mostly Online Learning" />
        <CardSection4 img={bgImage2} text="Become an Instructor" />
      </div>
    </div>
  );
}
