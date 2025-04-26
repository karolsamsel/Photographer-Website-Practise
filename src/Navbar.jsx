import { useState } from "react";

export function NavBar() {
  const [IsOpen, SetIsOpen] = useState(false);

  function toggleExpandable() {
    SetIsOpen(!IsOpen);
    const hero = document.querySelector(".hero");
    if (!IsOpen) {
      hero.style.marginTop = "25rem";
    } else {
      hero.style.marginTop = "0";
    }
    // whenever I expand list it makes some spaces for it
  }

  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo-circle"></div>
      <img src="/logo.png" alt="logo" className="nav-bar__logo" />
      <div className="nav-bar__expandable">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className={`nav-bar__expandable__arrow ${
            IsOpen ? "expandable-arrow-rotate" : ""
          }`}
          onClick={() => toggleExpandable()}
        >
          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        </svg>
        <ul
          className={`nav-bar__expandable__list ${
            IsOpen ? "expadable-visible" : "expandable-hidden"
          }`}
        >
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
