import React from "react";
import styled from "styled-components";

export default function CardCours({ title, description, src, alt }) {
  return (
    <CardContainer>
      <div className="grid grid-cols-3">
        <div className="blockblue bg-[#2b4eff] text-[#f3f4f8] rounded-md shadow-xl p-7">
          <img className="w-9" src={src} alt={alt} />
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.main``;
