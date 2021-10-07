import React, { useState } from "react";
import testimonials from "../assets/data/testimonials";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import SectionTitle from "./SectionTitle";
import Ptext from "./Ptext";
import styled from "styled-components";
const TestimonialSectionStyles = styled.div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;
function Testinonialssection() {
  const [activeindex, setActiveindex] = useState(1);
  const activeSlide = testimonials[activeindex];
  function handleNext() {
    if (activeindex >= testimonials.length - 1) {
      setActiveindex(0);
    } else {
      setActiveindex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeindex === 0) {
      setActiveindex(testimonials.length - 1);
    } else {
      setActiveindex((oldIndex) => oldIndex - 1);
    }
  }
  return (
    <TestimonialSectionStyles>
      <div className="container">
        <SectionTitle
          heading="Testimonials"
          subheading="what my clients think about me"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <Ptext>{activeSlide.desc}</Ptext>
                  <h2 className="testimonial__name">{activeSlide.name}</h2>
                  <p className="testimonial__title">{activeSlide.title}</p>
                  <p className="testimonial__title">{activeSlide.org}</p>
                </div>
              </div>
              {/*  <button onClick={() => setState((state) => !state)}>
                {state ? "Goodbye, world!" : "Hello, world!"}
              </button> */}
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />{" "}
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}

export default Testinonialssection;
