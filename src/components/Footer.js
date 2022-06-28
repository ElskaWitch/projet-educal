import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { WiDirectionRight } from "react-icons/wi";

export default function Footer() {
  return (
    <WrapperFooter>
      <div className="bg-[#edeef3] ">
        <div className="allblock  flex">
          <div className="block1">
            <div>
              <img src="logo.png" alt="" />
            </div>
            <div>
              <p>
                Great lesson ideas and lesson plans for ESL teachers! Educators
                can customize lesson plans to best.
              </p>
            </div>
            <div className="flex  gap-3 pt-9">
              <FaFacebookF className="text-[#f3f4f8] bg-[#2b4eff] rounded-md w-7 h-7 " />
              <FaTwitter className="text-[#f3f4f8] bg-[#03a9f4] rounded-md w-7 h-7" />
              <FaPinterestP className="text-[#f3f4f8] bg-[#ff3c4e] rounded-md w-7 h-7" />
            </div>
          </div>
          <div className="block2">
            <div>
              <h3>Company</h3>
            </div>
            <div>
              <p>About</p>
              <p>Courses</p>
              <p>Events</p>
              <p>Instructor</p>
              <p>Career</p>
              <p>Become a Teacher</p>
              <p>Conctact</p>
            </div>
          </div>
          <div className="block3">
            <div>
              <h3>Platform</h3>
            </div>
            <div>
              <p>Browse Library</p>
              <p>Library</p>
              <p>Partners</p>
              <p>News & Blogs</p>
              <p>FAQs</p>
              <p>Tutorials</p>
            </div>
          </div>
          <div className="block4">
            <div>
              <h3>Subscribe</h3>
              <div>
                <button className="flex bg-[#2b4eff] text-[#f3f4f8] items-center">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="p-4"
                  />
                  <WiDirectionRight className="text-5xl " />
                </button>
              </div>
              <div className="pt-5">
                <p>Get the latest news and updates right at your inbox.</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>
            @ 2022 Educal, All Right Reserved. Design By
            <span className="text-[#2b4eff] "> Theme Pure</span>
          </p>
        </div>
      </div>
    </WrapperFooter>
  );
}

const WrapperFooter = styled.footer`
  .block1 {
    padding-left: 150px;
  }
  .block2,
  .block3 {
    padding-left: 150px;
    padding-right: 150px;
  }
  .block4 {
    padding-right: 150px;
  }
  .block1,
  .block2,
  .block3,
  .block4 {
    padding-top: 150px;
    padding-bottom: 150px;
  }
  h3 {
    font-weight: 700;
    padding-bottom: 25px;
  }

  .block1 p {
    padding-top: 25px;
  }
`;
