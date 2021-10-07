import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { MdSearch } from "react-icons/md";
import Projectitem from "../components/Projectitem";
import projects from "../assets/data/projects";

const Projectstyles = styled.div`
  padding: 10rem 0;
  .projects__allitems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchbar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchbar .search__icon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchbar .search__icon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchbar,
    .projects__searchbar form,
    .projects__searchbar input {
      width: 100%;
    }
  }
`;
function Projects() {
  const [projectsdata, setProjectsdata] = useState(projects);
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    if (searchtext === "") return;
    setProjectsdata(() =>
      projects.filter((item) =>
        item.name.toLowerCase().match(searchtext.toLowerCase())
      )
    );
  }, [searchtext]);

  const handlechange = (e) => {
    e.preventDefault();
    setSearchtext(e.target.value);
    if (e.target.value.length <= 0) setProjectsdata(projects);
  };
  return (
    <Projectstyles>
      <div className="container">
        <SectionTitle subheading="Some of my recent works" heading="Projects" />
        <div className="projects__searchbar">
          <form>
            <input
              type="text"
              value={searchtext}
              onChange={handlechange}
              placeholder="Project name.."
            />
            <MdSearch className="search__icon" />
          </form>
        </div>
        <div className="projects__allitems">
          {projectsdata.map((project) => (
            <Projectitem
              key={project.id}
              title={project.name}
              desc={project.desc}
              img={project.img}
            />
          ))}
        </div>
      </div>
    </Projectstyles>
  );
}

export default Projects;
