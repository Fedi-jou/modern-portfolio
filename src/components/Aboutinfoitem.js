import React from "react";
import styled from "styled-components";
import Ptext from "./Ptext";

const Aboutitemstyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 2rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
    padding: 1rem;
    border-radius: 8px;
  }
  .item {
    background-color: var(--deep-dark);
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
function Aboutinfoitem({ title = "Title", items = ["Html", "CSS"] }) {
  return (
    <Aboutitemstyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <Ptext>{item}</Ptext>
          </div>
        ))}
      </div>
    </Aboutitemstyles>
  );
}

export default Aboutinfoitem;
