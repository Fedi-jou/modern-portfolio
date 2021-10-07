import React from "react";
import styled from "styled-components";
import Footercol from "./Footercol";
import Ptext from "./Ptext";

const Footerstyle = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

function Footer() {
  const aujd = new Date();
  return (
    <Footerstyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Name Name</h1>
          <Ptext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            consequatur architecto, quos fugiat ducimus odio.
          </Ptext>
        </div>
        <div className="footer__col2">
          <Footercol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <Footercol
            heading="Contact Info"
            links={[
              {
                title: "+216 00 000 000",
                path: "tel:+216 00 000 000",
              },
              {
                title: "user@gmail.com",
                path: "mailto:user@gmail.com",
              },
              {
                title: "Tunis , Tunisia",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <Footercol
            heading="social Links"
            links={[
              {
                title: "LinkedIn",
                path: "http://linkedin.com",
              },
              {
                title: "Twitter",
                path: "http://twitter.com",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>© {aujd.getFullYear()}</Ptext>
        </div>
      </div>
    </Footerstyle>
  );
}

export default Footer;
