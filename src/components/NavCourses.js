import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function NavCourses() {
  const items = [
    {
      name: "Home",
      slug: "/Home",
      id: 100,
    },
    {
      name: "Courses",
      slug: "/Courses",
      id: 200,
    },
    {
      name: "Blog",
      slug: "/Blog",
      id: 300,
    },
    {
      name: "Pages",
      slug: "/Instructor",
      id: 400,
    },
    {
      name: "Contact",
      slug: "/Contact",
      id: 500,
    },
  ];

  return (
    <header className="">
      <NavContainer>
        <div className="barnav relative z-30">
          <div className="logo">
            <Link to="/">
              <img src="logo-2.png" alt="logo" />
            </Link>
          </div>
          <div className="nav-item flex items-center ">
            <ul>
              {items.map((item) => (
                <Item slug={item.slug} key={item.id} name={item.name} />
              ))}
            </ul>
          </div>
          <div className="bg-[#2b4eff] text-[#fff] rounded-md px-5 ">
            <button className="p-2 ">Try for free</button>
          </div>
        </div>
      </NavContainer>
    </header>
  );
}

const NavContainer = styled.nav`
  .barnav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    padding-left: 150px;
    padding-right: 150px;
  }

  ul {
    display: flex;
    li {
      list-style: none;
      padding-right: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
`;
