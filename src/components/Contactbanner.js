import React from "react";
import Ptext from "./Ptext";
import Button from "./Button";
import styled from "styled-components";

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactbanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactbanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactbanner__heading {
      font-size: 2.8rem;
    }
  }
`;
function Contactbanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactbanner__wrapper">
          <h3 className="contactbanner__heading">
            For more information or collaboration
          </h3>
          <Ptext>Click here</Ptext>
          <Button btntext="Contact now" btnlink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

export default Contactbanner;
