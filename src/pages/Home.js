import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";
import HomeSection6 from "../components/HomeSection6";
import HomeSection7 from "../components/HomeSection7";
import HomeSection8 from "../components/HomeSection8";
import Footer from "../components/Footer";

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

  const dattas = [
    {
      sujet: "Art & Design",
      src: "course-1.jpg",
      alt: "etudiants",
      lesson: "43 Lesson",
      title: "Become a product Manager learn the skills & job.",
      portrait: "teacher-1.jpg",
      person: "jim.S",
      name: "Jim Séchen",
      price: "Free",
      promo: "",
      bgcolors: "bg-[#b128ff]",
      color: "text-[#b128ff]",
      id: 5,
    },

    {
      sujet: "Mechanical",
      src: "course-2.jpg",
      alt: "cours",
      lesson: "72 Lesson",
      title: "Fundamentals of music theory Learn new",
      portrait: "teacher-2.jpg",
      person: "Barry.T",
      name: "Barry Tone",
      price: "$32.00",
      promo: "$68.00",
      bgcolors: "bg-[#03a9f4]",
      color: "text-[#03a9f4]",
      id: 6,
    },
    {
      sujet: "Development",
      src: "course-3.jpg",
      alt: "classe",
      lesson: "14 Lesson",
      title: "Strategy law and organization Foundation",
      portrait: "teacher-3.jpg",
      person: "Elon.G",
      name: "Elon Gated",
      price: "$46.00",
      promo: "$68.00",
      bgcolors: "bg-[#30a820]",
      color: "text-[#30a820]",
      id: 7,
    },
    {
      sujet: "UX Design",
      src: "course-6.jpg",
      alt: "ordinateur",
      lesson: "13 Lesson",
      title: "Creative writing through Storytelling",
      portrait: "teacher-6.jpg",
      person: "Shahnewaz.S",
      name: "Shahnewaz Sakil",
      price: "$46.00",
      promo: "$72.00",
      bgcolors: "bg-[#f2277e]",
      color: "text-[#f2277e]",
      id: 8,
    },
    {
      sujet: "Marketing",
      src: "course-4.jpg",
      alt: "dehors",
      lesson: "22 Lesson",
      title: "The buisness Intelligence analyst Course 2022",
      portrait: "teacher-4.jpg",
      person: "Eleanor.F",
      name: "Eleanor Fant",
      price: "$62.00",
      promo: "$97.00",
      bgcolors: "bg-[#3b60ff]",
      color: "text-[#3b60ff]",
      id: 9,
    },
    {
      sujet: "Audio & Music",
      src: "course-5.jpg",
      alt: "tableau",
      lesson: "18 Lesson",
      title: "Build your media and Public presence",
      portrait: "teacher-5.jpg",
      person: "Pelican.S",
      name: "Pelican Steve",
      price: "$62.00",
      promo: "$97.00",
      bgcolors: "bg-[#ff7921]",
      color: "text-[#ff7921]",
      id: 10,
    },
  ];

  const datos = [
    {
      img: "svgexport-11.png",
      alt: "logo",
      number: "55,267",
      text: "Students Enrolled",
      id: 11,
    },
    {
      img: "svgexport-12.png",
      alt: "logo",
      number: "397",
      text: "Total Courses",
      id: 12,
    },
    {
      img: "svgexport-13.png",
      alt: "logo",
      number: "3,853",
      text: "Online Learners",
      id: 13,
    },
    {
      img: "svgexport-14.png",
      alt: "logo",
      number: "32k",
      text: "Foreign Followers",
      id: 14,
    },
  ];

  const dattos = [
    {
      img: "blog-1.jpg",
      alt: "etudiant",
      cours: "Art & Design",
      titre: "The Challenge Of Global Learning In Public Education",
      teacher: "teacher-1.jpg",
      altname: "Jim.S",
      prenom: "Jim Séchen",
      date: "July 02, 2022",
      bgcolor: "bg-[#a0dcf794]",
      color: "text-[#03a9f4]",
      id: 15,
    },
    {
      img: "blog-2.jpg",
      alt: "etudiant",
      cours: "Marketing",
      titre: "Exactly How Technology Can Make Reading Better",
      teacher: "teacher-2.jpg",
      altname: "Barry.T",
      prenom: "Barry Tone",
      date: "July 02, 2022",
      bgcolor: "bg-[#e5d3ffc4]",
      color: "text-[#8330fe]",
      id: 16,
    },
    {
      img: "blog-3.jpg",
      alt: "etudiant",
      cours: "UX Design",
      titre: "New Chicago school budget relies on state pension",
      teacher: "teacher-3.jpg",
      altname: "Barry.T",
      prenom: "Barry Tone",
      date: "July 02, 2022",
      bgcolor: "bg-[#ffcde3c2]",
      color: "text-[#f2277e]",
      id: 17,
    },
  ];

  return (
    <Homes>
      <Navigation />
      <Hero />
      {/* section 1 */}
      <HomeSection1 datas={datas} />
      {/* section 2 */}
      <HomeSection2 />
      {/* section 3 */}
      <HomeSection3 dattas={dattas} />
      {/* section 4 */}
      <HomeSection4 />
      {/* section 5 */}
      <HomeSection5 />
      {/* section 6 */}
      <HomeSection6 datos={datos} />
      {/* section 7 */}
      <HomeSection7 />
      {/* section 8 */}
      <HomeSection8 dattos={dattos} />
      <Footer />
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
