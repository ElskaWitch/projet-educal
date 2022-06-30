import React from "react";
import NavCourses from "../components/NavCourses";
import FooterCourses from "../components/FooterCourses";
import HeroInstructor from "../components/HeroInstructor";
import InstructorPage from "../components/InstructorPage";

export default function Instructor() {
  const dats = [
    {
      img: "prof6.png",
      alt: "prof1",
      name: "Lillian Walsh,",
      taff: " CO Founder",
      id: 77,
    },
    {
      img: "prof2.png",
      alt: "prof2",
      name: "Kelly Franklin,",
      taff: " Designer",
      id: 78,
    },
    {
      img: "prof3.png",
      alt: "prof3",
      name: "Hilary Ouse,",
      taff: " Markater",
      id: 79,
    },
    {
      img: "prof4.png",
      alt: "prof4",
      name: "Lilly Welsh,",
      taff: " CO Founder",
      id: 80,
    },
    {
      img: "prof5.png",
      alt: "prof5",
      name: "Shahnewaz,",
      taff: " Web Developer",
      id: 81,
    },
    {
      img: "prof6.png",
      alt: "prof6",
      name: "Nicolas Tesla,",
      taff: "Engineer",
      id: 82,
    },
  ];

  return (
    <div>
      <NavCourses />
      <HeroInstructor />
      <InstructorPage dats={dats} />
      <FooterCourses />
    </div>
  );
}
