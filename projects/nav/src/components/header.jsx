export default function Header() {
  return (
    <header>
      <div className="header-wrapper">

        <div className="logo">
          <svg
            className="logo-icon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="45" r="35" fill="#FFB4A2" />
            <circle cx="38" cy="38" r="5" fill="#8DC4B2" />
            <circle cx="62" cy="38" r="5" fill="#8DC4B2" />

            <path
              d="M35 55Q50 65 65 55"
              stroke="#8DC4B2"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            <circle cx="30" cy="35" r="8" fill="#FFD4C4" />
            <circle cx="70" cy="35" r="8" fill="#FFD4C4" />
          </svg>

          Sweet Dreams
        </div>

        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav id="mainNav">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#menu">
            Menu
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}