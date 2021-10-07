import React from "react";
import styled from "styled-components";
import Contactinfoitem from "./Contactinfoitem";
import SectionTitle from "./SectionTitle";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import Contactform from "./Contactform";

const Contactsectionstyle = styled.div`
  padding: 10rem 0;
  .contactsection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactsection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactsection__wrapper {
      flex-direction: column;
    }
    .contactsection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function Contactsection() {
  return (
    <Contactsectionstyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="Get in touch" />
        <div className="contactsection__wrapper">
          <div className="left">
            <Contactinfoitem icon={<MdLocalPhone />} text="+216 00 000 000" />
            <Contactinfoitem icon={<MdEmail />} text="user@email.com" />
            <Contactinfoitem text="Tunis , Tunisia" />
          </div>
          <div className="right">
            <Contactform />
          </div>
        </div>
      </div>
    </Contactsectionstyle>
  );
}

export default Contactsection;
