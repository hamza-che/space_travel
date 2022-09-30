import React from "react";

const InteractiveElements = () => {
  return (
    <section
      className="flow"
      id="interactive-elements"
      style={{ marginTop: "4rem" }}
    >
      <h2 className="numbered-title">
        <span>03</span> Interactive elements
      </h2>

      {/* <!-- navigation --> */}
      <div>
        <nav>
          <ul className="primary-navigation underline-indecators flex">
            <li className="active">
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>01</span> Active
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>02</span> Hovered
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>03</span> Idle
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        {/* <!-- explore button --> */}
        <div>
          <a
            href="#explore"
            className="large-btn uppercase text-dark bg-white fs-600 ff-serif"
          >
            Explore
          </a>
        </div>

        <div
          className="flow"
          style={{ marginBottom: "25vh", "--flow-space": "4rem" }}
        >
          {/* <!-- Tabs --> */}
          <div className="tabs-list underline-indecators flex">
            <button
              aria-selected="true"
              className="uppercase text-light bg-dark letter-spacing-2 ff-sans-cond"
            >
              Moon
            </button>
            <button
              aria-selected="false"
              className="uppercase text-light bg-dark letter-spacing-2 ff-sans-cond"
            >
              Mars
            </button>
            <button
              aria-selected="false"
              className="uppercase text-light bg-dark letter-spacing-2 ff-sans-cond"
            >
              Europa
            </button>
          </div>

          {/* <!-- Dots --> */}
          <div className="dot-indecators flex">
            <button aria-selected="true">
              <span className="sr-only">Slide Title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide Title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide Title</span>
            </button>
          </div>

          {/* <!-- Numbers --> */}
          <div
            className="numbered-indecators flow"
            style={{ "--flow-space": "1rem" }}
          >
            <button aria-selected="true" className="ff-serif fs-600">
              1
            </button>
            <button aria-selected="false" className="ff-serif fs-600">
              2
            </button>
            <button aria-selected="false" className="ff-serif fs-600">
              3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveElements;
