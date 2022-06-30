import React from "react";
import NavCourses from "../components/NavCourses";
import HeroBlog from "../components/HeroBlog";
import FooterCourses from "../components/FooterCourses";
import BlogPage from "../components/BlogPage";

export default function Blog() {
  const dattis = [
    {
      img: "blog-1.jpg",
      alt: "cour1",
      cour: "Art & Design",
      title: "Become a product Manager learn the skills & job.",
      teacher: "teacher-1.jpg",
      altname: "jim sechen",
      name: "Jim Séchen",
      date: "April 02, 2022",
      color: "text-[#03a9f4]",
      bgcolor: "bg-[#d3f0fd]",
      id: 250,
    },

    {
      img: "blog-2.jpg",
      alt: "cour2",
      cour: "Art & Design",
      title: "Fundamentals of music theory Learn new",
      teacher: "teacher-2.jpg",
      altname: "barry",
      name: "Barry Tone",
      date: "April 02, 2022",
      color: "text-[#b128ff]",
      bgcolor: "bg-[#edcdff]",
      id: 260,
    },
    {
      img: "blog-3.jpg",
      alt: "cour3",
      cour: "Art & Design",
      title: "Strategy law and organization Foundation",
      teacher: "teacher-3.jpg",
      altname: "elon",
      name: "Elon Gated",
      date: "April 02, 2022",
      color: "text-[#f2277e]",
      bgcolor: "bg-[#ffcae1]",
      id: 270,
    },
    {
      img: "blog-4.jpg",
      alt: "cour4",
      cour: "Art & Design",
      title: "The business Intelligence analyst Course 2022",
      teacher: "teacher-4.jpg",
      altname: "eleanor",
      name: "Eleanor Fant",
      date: "April 02, 2022",
      color: "text-[#30a820]",
      bgcolor: "bg-[#daffd5]",
      id: 280,
    },
    {
      img: "blog-5.jpg",
      alt: "cour5",
      cour: "Art & Design",
      title: "Build your media and Public presence",
      teacher: "teacher-5.jpg",
      altname: "pelican",
      name: "Pelican Steve",
      date: "April 02, 2022",
      color: "text-[#fa7919]",
      bgcolor: "bg-[#fad6bb]",
      id: 290,
    },
    {
      img: "blog-6.jpg",
      alt: "cour6",
      cour: "Art & Design",
      title: "Creative writing through Storytelling",
      teacher: "teacher-6.jpg",
      altname: "elon",
      name: "Elon Gated",
      date: "April 02, 2022",
      color: "text-[#285da1]",
      bgcolor: "bg-[#cee3ff]",
      id: 300,
    },
  ];

  return (
    <div>
      <NavCourses />
      <HeroBlog />
      <BlogPage dattis={dattis} />
      <FooterCourses />
    </div>
  );
}
