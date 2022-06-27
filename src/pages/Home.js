import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

export default function Home() {
  const datas = [
    {
      title: "4,000 Online courses",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-7.png",
      alt: "courses",
      bgcolor: "bg-[#2b4eff]",
      id: 1,
    },

    {
      title: "Job placement Support",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-8.png",
      alt: "support",
      bgcolor: "bg-[#f2277e]",
      id: 2,
    },
    {
      title: "Lifetime Slack chat support",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-9.png",
      alt: "chat",
      bgcolor: "bg-[#8007e6]",
      id: 3,
    },
    {
      title: "Research an Innovation",
      description: "Arse over tit morish wind up gormless butty.!",
      src: "svgexport-10.png",
      alt: "research",
      bgcolor: "bg-[#0cae74]",
      id: 4,
    },
  ];

  return (
    <Homes>
      {/* section 1 */}
      <div className="block">
        <div className="text-center pt-40 pb-20">
          <h2>Why An Scholercity Out Of The Ordinary</h2>
          <img src="yellow-bg.png" alt="ligne jaune" className="jaune" />
          <p>
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        <div className="flex gap-5 pb-40 ">
          {datas.map((data) => {
            return (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                src={data.src}
                alt={data.alt}
                bgcolor={data.bgcolor}
              />
            );
          })}
        </div>
      </div>
      {/* section 2 */}
      <div className="block flex px-40 pb-40">
        <div>
          <img src="about.jpg" alt="about" />
        </div>
        <div className="pl-28">
          <h2>Achieve Your Goals With Educal</h2>
          <img src="yellow-bg.png" alt="" />
          <p>
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
      {/* section 3 */}
      <div className="bg-[#edeef3]">
        <div className="block py-40">
          <div className="flex space-x-60 items-end">
            <div>
              <h2>Find The Right Online Course For You</h2>
              <img src="yellow-bg.png" alt="" />
              <p>
                You don't have to struggle alone, you've got our assistance and
                help.
              </p>
            </div>
            <div className="">
              <ul className="flex ">
                <li>See all</li>
                <li>Trending</li>
                <li>Popularity</li>
                <li>Featured</li>
                <li>Art & Design</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 pt-10 ">
            {datas.map((data) => {
              return (
                <Card
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  src={data.src}
                  alt={data.alt}
                  bgcolor={data.bgcolor}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="block pt-40 pb-40">
        <div className="text-center">
          <h2>What Is Skilline ?</h2>
          <img src="yellow-bg.png" alt="" />
          <p>
            Sloshed faff about old mucker blattant bubble and squeak hanky panky
            some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered
            smashing blow off I'm telling up the kyver he legged it bleeder
            jolly good.
          </p>
        </div>
        <div className="flex gap-5 w-96 pt-10 ">
          <img src="what-1.jpg" alt="what1" />
          <img src="what-2.jpg" alt="what2" />
        </div>
      </div>
      {/* section 5 */}
      <div className="block pb-40 flex">
        <div>
          <p className="text-[#2b4eff]">Why Choses Me</p>
          <h2>Tools For Teachers And Learners</h2>
          <img src="yellow-bg.png" alt="" />
          <p>
            Oxford chimney pot Eaton faff about blower blatant brilliant, bubble
            and squeak he legged it Charles bonnet arse at public school
            bamboozled.
          </p>
          <div className="flex gap-5 pt-10">
            <button className="btn">Join for free</button>
            <button>Learn More</button>
          </div>
        </div>
        <div>
          <img src="why.png" alt="why" />
        </div>
      </div>
      {/* section 6 */}
      <div className="block pb-40 ">
        <div className="text-center">
          <h2>We Are Proud</h2>
          <img src="yellow-bg.png" alt="" />
          <p>
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        <div>
          <img src="svgexport-11.png" alt="" />
          <p className="font-bold text-lg">55,267</p>
          <p>Students Enrolled</p>
        </div>
      </div>
    </Homes>
  );
}

const Homes = styled.main`
  h2 {
    font-weight: 900;
    font-size: 40px;
    font-family: "Hind", sans-serif;
  }

  .jaune {
    position: relative;
    left: 30%;
  }

  .block {
    padding-left: 150px;
    padding-right: 150px;
  }

  button {
    font-weight: 500;
  }

  .button {
    border: 2px solid #d7d9e3;
    border-radius: 3px;
    padding: 7px 20px 7px 20px;
  }
  .btn {
    color: #f3f4f8;
    background-color: #2b4eff;
    border-radius: 3px;
    padding: 7px 20px 7px 20px;
  }

  li {
    font-weight: 700;
    padding: 5px;
  }
`;
