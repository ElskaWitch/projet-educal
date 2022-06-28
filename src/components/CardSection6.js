import React from "react";
import styled from "styled-components";

export default function CardSection6({ img, alt, number, text }) {
  return (
    <CardSection6s className="">
      <div className="p-28 ">
        <img className="w-8 pb-2" src={img} alt={alt} />
        <p className="font-extrabold text-lg">{number}</p>
        <p className="text-[#6d6e75] font-medium">{text}</p>
      </div>
    </CardSection6s>
  );
}

const CardSection6s = styled.main``;
