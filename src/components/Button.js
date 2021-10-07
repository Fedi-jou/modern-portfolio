import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Btnstyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

function Button({ btnlink, btntext, outline }) {
  return (
    <Btnstyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnlink}>
        {btntext}
      </Link>
    </Btnstyle>
  );
}

export default Button;
