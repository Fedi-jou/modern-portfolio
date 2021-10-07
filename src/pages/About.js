import React from "react";
import Ptext from "../components/Ptext";
import Button from "../components/Button";
import Aboutimg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import Aboutinfoitem from "../components/Aboutinfoitem";
import Contactbanner from "../components/Contactbanner";

const Aboutpagestyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
  }
`;

function About() {
  return (
    <Aboutpagestyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hello i'm <span>name name</span>
            </p>
            <h2 className="about__heading">Your job title and / or misson</h2>
            <div className="about__info">
              <Ptext>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat, libero! Nobis asperiores tempora ipsum recusandae.
                Quis eveniet aspernatur perferendis veniam.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, tempore.
              </Ptext>
            </div>
            <Button btntext="Download CV" btnlink="" />
          </div>
          <div className="right">
            <img src={Aboutimg} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <Aboutinfoitem title="High School" items={["Schoolname"]} />
            <Aboutinfoitem title="College" items={["College name"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <Aboutinfoitem title="Front-end" items={["List your skills"]} />
            <Aboutinfoitem title="Back-end" items={["list your skills"]} />
            <Aboutinfoitem title="others" items={["list your skills"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Work Experiences</h1>
            <Aboutinfoitem title="year" items={["company 1 and task 1"]} />
            <Aboutinfoitem title="year" items={["comapany 2 and task 2"]} />
            <Aboutinfoitem title="year" items={["company 3 and task 3"]} />
          </div>
        </div>
      </div>
      <Contactbanner />
    </Aboutpagestyles>
  );
}

export default About;
