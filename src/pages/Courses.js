import React from "react";
import NavCourses from "../components/NavCourses";
import HeroCourses from "../components/HeroCourses";
import CoursesPage from "../components/CoursesPage";
import FooterCourses from "../components/FooterCourses";

export default function Courses() {
  const datis = [
    {
      cour: "",
      img: "course-1.jpg",
      alt: "cour1",
      lesson: "43 Lesson",
      stars: "4.5(44)",
      title: "Become a product Manager learn the skills & job.",
      text: "Communia virtutes tutiorem declarat sanabat oblivisci nostris tamquam iucunditatem",
      teacher: "teacher-1.jpg",
      altname: "jim sechen",
      name: "Jim Séchen",
      price: "Free",
      promo: "",
      color: "text-[#e233fb]",
      bgcolor: "bg-[#]",
      id: 25,
    },

    {
      cour: "Art & Design",
      img: "course-2.jpg",
      alt: "cour2",
      lesson: "72 Lesson",
      stars: "4.5(44)",
      title: "Fundamentals of music theory Learn new",
      text: "Communia virtutes tutiorem declarat sanabat oblivisci nostris tamquam iucunditatem",
      teacher: "teacher-2.jpg",
      altname: "barry",
      name: "Barry Tone",
      price: "$32.00",
      promo: "$68.00",
      color: "text-[#03a9f4]",
      bgcolor: "bg-[#03a9f4]",
      id: 26,
    },
    {
      cour: "Art & Design",
      img: "course-3.jpg",
      alt: "cour3",
      lesson: "14 Lesson",
      stars: "3.5(32)",
      title: "Strategy law and organization Foundation",
      text: "Communia virtutes tutiorem declarat sanabat oblivisci nostris tamquam iucunditatem",
      teacher: "teacher-3.jpg",
      altname: "elon",
      name: "Elon Gated",
      price: "$46.00",
      promo: "$68.00",
      color: "text-[#8330fe]",
      bgcolor: "bg-[#8330fe]",
      id: 27,
    },
    {
      cour: "Art & Design",
      img: "course-4.jpg",
      alt: "cour4",
      lesson: "14 Lesson",
      stars: "3.5(32)",
      title: "The business Intelligence analyst Course 2022",
      text: "Communia virtutes tutiorem declarat sanabat oblivisci nostris tamquam iucunditatem",
      teacher: "teacher-4.jpg",
      altname: "eleanor",
      name: "Eleanor Fant",
      price: "$46.00",
      promo: "$68.00",
      color: "text-[#30a820]",
      bgcolor: "bg-[#30a820]",
      id: 28,
    },
    {
      cour: "Art & Design",
      img: "course-5.jpg",
      alt: "cour5",
      lesson: "14 Lesson",
      stars: "3.5(32)",
      title: "Build your media and Public presence",
      text: "Communia virtutes tutiorem declarat sanabat oblivisci nostris tamquam iucunditatem",
      teacher: "teacher-5.jpg",
      altname: "pelican",
      name: "Pelican Steve",
      price: "$62.00",
      promo: "$97.00",
      color: "text-[#2d69f0]",
      bgcolor: "bg-[#2d69f0]",
      id: 29,
    },
    {
      cour: "Art & Design",
      img: "course-6.jpg",
      alt: "cour6",
      lesson: "14 Lesson",
      stars: "3.5(32)",
      title: "Creative writing through Storytelling",
      text: "Communia virtutes tutiorem declarat sanabat oblivisci nostris tamquam iucunditatem",
      teacher: "teacher-6.jpg",
      altname: "elon",
      name: "Elon Gated",
      price: "$62.00",
      promo: "$97.00",
      color: "text-[#ff9415]",
      bgcolor: "bg-[#ff9415]",
      id: 30,
    },
  ];

  return (
    <div>
      <NavCourses />
      <HeroCourses />
      {/* CoursesCard */}
      <CoursesPage datis={datis} />
      <FooterCourses />
    </div>
  );
}
