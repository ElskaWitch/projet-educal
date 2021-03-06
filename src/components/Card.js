import React from "react";
import styled from "styled-components";

export default function CardCours({
  title,
  description,
  src,
  alt,
  bgcolor = "bg-[#2b4eff] ",
}) {
  return (
    <CardContainer className="">
      <div
        className={` ${bgcolor} min-h-[250px] text-[#f3f4f8] rounded-md shadow-2xl p-7`}
      >
        <img className="w-9 pb-6" src={src} alt={alt} />
        <h3 className="text-xl font-bold pb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.main``;
