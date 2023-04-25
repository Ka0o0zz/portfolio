/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <h2>David Morales</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
            <span />
          </li>
          <li>
            <a href="#">About me</a>
            <span />
          </li>
          <li>
            <a href="#">Skills</a>
            <span />
          </li>
          <li>
            <a href="#">Experience</a>
            <span />
          </li>
          <li>
            <a href="#">Projects</a>
            <span />
          </li>
          <li>
            <a href="#">Contact</a>
            <span />
          </li>
        </ul>

        <button onClick={() => setToggle(!toggle)}>
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="button to open or close navbar"
          />
        </button>
      </nav>
    </header>
  );
};
