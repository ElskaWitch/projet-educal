import React from "react";

export default function HomeSection2() {
  return (
    <div className="block flex px-40 pb-40">
      <div>
        <img src="about.jpg" alt="about" />
      </div>
      <div className="pl-28">
        <h2>Achieve Your Goals With Educal</h2>
        <img src="yellow-bg.png" alt="" />
        <p className="text-[#6d6e75]">
          Lost the plot bobby susch a fibber bleeding bits and bobs don't get
          shirty with me bugger all mate chinwag super pukka william barney,
          horse play buggered.
        </p>
        <ul className="py-5">
          <li>Upskill your organization</li>
          <li>Access more then 100K online courses</li>
          <li>Learn the latest skills</li>
        </ul>
        <button className="button">Apply now</button>
      </div>
    </div>
  );
}
