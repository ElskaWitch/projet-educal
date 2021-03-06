import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function Navigation() {
  const items = [
    {
      name: "Home",
      slug: "/Home",
      id: 1,
    },
    {
      name: "Courses",
      slug: "/Courses",
      id: 2,
    },
    {
      name: "Blog",
      slug: "/Blog",
      id: 3,
    },
    {
      name: "Pages",
      slug: "/Instructor",
      id: 4,
    },
    {
      name: "Contact",
      slug: "/Contact",
      id: 5,
    },
  ];

  return (
    <header className="">
      <NavContainer>
        <div className="barnavs md:flex md:justify-center md:items-center bg-[#b8dde3] md:px-[150px] md:p-[20px] ">
          <div className="logo">
            <Link to="/">
              <img src="logo.png" alt="logo" />
            </Link>
          </div>
          <div className="nav-item  md:flex md:items-center ">
            <ul className="md:flex">
              {items.map((item) => (
                <Item slug={item.slug} key={item.id} name={item.name} />
              ))}
            </ul>
            <div className="bg-[#2b4eff] text-[#fff] rounded-md px-5 ">
              <button className="p-2 ">Sign up</button>
            </div>
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
    background-color: #b8dde3;
    padding: 20px;
    padding-left: 150px;
    padding-right: 150px;
  }

  ul {
    /* display: flex; */
    li {
      list-style: none;
      padding-right: 20px;
      font-weight: 600;
    }
  }
`;
