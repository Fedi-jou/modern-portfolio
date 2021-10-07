import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImg from "../assets/images/projectImg.png";

const ProjectItemstyles = styled.div`
  .projectitem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono regular";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectitem__img {
      height: 350px;
    }
  }
`;

function Projectitem({ title, img, desc }) {
  return (
    <ProjectItemstyles>
      <Link to="/projects" className="projectitem__img">
        <img src={img} alt="" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemstyles>
  );
}

export default Projectitem;
