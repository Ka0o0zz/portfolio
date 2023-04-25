import StarsCanvas from "./canvas/starts";

/* eslint-disable @next/next/no-img-element */
export const Home = () => {
  return (
    <section className="home">
      <div className="container-large">
        <div className="header_layout">
          <div className="div-header-layout text">
            <p className="header-p">HELLO, I AM David Morales</p>
            <h1>Welcome to my web portfolio!</h1>
            <p className="paragraph-p">
              I am a full stack web developer passionate about creating
              innovative and efficient solutions for my clients. Throughout my
              career, I have worked on a wide range of projects, from small
              websites to large enterprise applications.
            </p>
            <div className="button-group">
              <a href="#aboutMe" className="principal-button">
                About me
              </a>
              <a href="#skills" className="secondary-button">
                <div>Skills</div>
                <div className="ball">
                  <svg
                    width="1.25rem"
                    height="1.5rem"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="CurrentColor"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="div-header-layout img">
            <img src="/main-image.png" alt="main image" />
          </div>
        </div>
      </div>

      <StarsCanvas />
    </section>
  );
};
