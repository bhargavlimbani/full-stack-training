export default function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero" id="home">

        <div className="hero-content">
          <h1>Where Every Bite is a Sweet Dream! 🌸</h1>

          <p>
            Handcrafted pastries, adorable treats, and the coziest café vibes.
            Come experience our kawaii bakery magic!
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">
              View Menu
            </a>

            <a href="#about" className="btn btn-secondary">
              Our Story
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-container">

            {/* Graphic 1: Sweet Treats */}
            <svg
              className="hero-illustration active"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cupcake */}
              <path
                d="M200 350C200 350 180 320 180 290C180 260 200 240 230 240C260 240 280 260 280 290C280 320 260 350 260 350H200Z"
                fill="#FFB4A2"
              />
              <rect
                x="190"
                y="350"
                width="80"
                height="100"
                rx="10"
                fill="#D4C5F9"
              />
              <line
                x1="230"
                y1="360"
                x2="230"
                y2="440"
                stroke="#B4A4D4"
                strokeWidth="3"
              />
              <line
                x1="210"
                y1="380"
                x2="210"
                y2="420"
                stroke="#B4A4D4"
                strokeWidth="3"
              />
              <line
                x1="250"
                y1="380"
                x2="250"
                y2="420"
                stroke="#B4A4D4"
                strokeWidth="3"
              />
              <ellipse
                cx="230"
                cy="220"
                rx="15"
                ry="20"
                fill="#FF6B9D"
              />

              {/* Donut */}
              <circle cx="350" cy="250" r="60" fill="#FFD4B8" />
              <circle cx="350" cy="250" r="30" fill="#FFF8F0" />
              <ellipse
                cx="330"
                cy="240"
                rx="8"
                ry="4"
                fill="#FF6B9D"
                transform="rotate(-20 330 240)"
              />
              <ellipse
                cx="360"
                cy="235"
                rx="8"
                ry="4"
                fill="#B8E6D5"
                transform="rotate(15 360 235)"
              />
              <ellipse
                cx="370"
                cy="250"
                rx="8"
                ry="4"
                fill="#D4C5F9"
                transform="rotate(45 370 250)"
              />
              <ellipse
                cx="340"
                cy="265"
                rx="8"
                ry="4"
                fill="#FFB4A2"
                transform="rotate(-30 340 265)"
              />

              {/* Cookie */}
              <circle cx="120" cy="200" r="45" fill="#E8C9A0" />
              <circle cx="110" cy="185" r="8" fill="#8B6F47" />
              <circle cx="130" cy="195" r="7" fill="#8B6F47" />
              <circle cx="115" cy="210" r="9" fill="#8B6F47" />
              <circle cx="135" cy="215" r="6" fill="#8B6F47" />

              {/* Macaron */}
              <ellipse
                cx="380"
                cy="380"
                rx="40"
                ry="15"
                fill="#FFB8D2"
              />
              <rect
                x="340"
                y="370"
                width="80"
                height="20"
                fill="#FFD4E4"
              />
              <ellipse
                cx="380"
                cy="390"
                rx="40"
                ry="15"
                fill="#FFB8D2"
              />

              {/* Stars and hearts */}
              <path
                d="M100 100L102 108L110 110L102 112L100 120L98 112L90 110L98 108L100 100Z"
                fill="#FFB4A2"
              />
              <path
                d="M420 150L422 158L430 160L422 162L420 170L418 162L410 160L418 158L420 150Z"
                fill="#D4C5F9"
              />
              <path
                d="M150 400 L145 405 L150 410 L155 405 Z"
                fill="#FF6B9D"
              />
              <path
                d="M440 320 L435 325 L440 330 L445 325 Z"
                fill="#B8E6D5"
              />
            </svg>

            {/* Graphic 2: Cakes & Pastries */}
            <svg
              className="hero-illustration"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Layer Cake */}
              <ellipse cx="250" cy="350" rx="80" ry="15" fill="#FFB4A2" />
              <rect
                x="170"
                y="320"
                width="160"
                height="30"
                fill="#FFD4C4"
              />
              <ellipse cx="250" cy="320" rx="80" ry="15" fill="#FFB4A2" />
              <rect
                x="180"
                y="280"
                width="140"
                height="40"
                fill="#D4C5F9"
              />
              <ellipse cx="250" cy="280" rx="70" ry="15" fill="#C4B5E9" />
              <rect
                x="190"
                y="240"
                width="120"
                height="40"
                fill="#FFB8D2"
              />
              <ellipse cx="250" cy="240" rx="60" ry="15" fill="#FFA8C2" />

              {/* Candles */}
              <rect
                x="230"
                y="210"
                width="8"
                height="30"
                fill="#FFF4B8"
              />
              <rect
                x="260"
                y="210"
                width="8"
                height="30"
                fill="#FFF4B8"
              />
              <ellipse cx="234" cy="207" rx="5" ry="8" fill="#FF6B9D" />
              <ellipse cx="264" cy="207" rx="5" ry="8" fill="#FF6B9D" />

              {/* Croissant */}
              <path
                d="M100 200 Q80 180 90 160 Q100 140 120 150 Q140 160 130 180 Q125 195 115 205 Z"
                fill="#E8C9A0"
              />
              <path
                d="M115 205 Q100 220 85 210 Q70 200 75 185 Q80 175 90 180 Q100 185 105 195 Z"
                fill="#D4B490"
              />
              <ellipse
                cx="95"
                cy="175"
                rx="4"
                ry="3"
                fill="#C4A480"
                transform="rotate(20 95 175)"
              />
              <ellipse
                cx="110"
                cy="170"
                rx="4"
                ry="3"
                fill="#C4A480"
                transform="rotate(-15 110 170)"
              />
              <ellipse
                cx="100"
                cy="190"
                rx="5"
                ry="3"
                fill="#C4A480"
              />

              {/* Pie */}
              <ellipse cx="380" cy="280" rx="60" ry="15" fill="#E8C9A0" />
              <path
                d="M320 280 Q380 220 440 280 Z"
                fill="#FFB4A2"
              />
              <line
                x1="350"
                y1="250"
                x2="350"
                y2="280"
                stroke="#D4A480"
                strokeWidth="3"
              />
              <line
                x1="380"
                y1="235"
                x2="380"
                y2="280"
                stroke="#D4A480"
                strokeWidth="3"
              />
              <line
                x1="410"
                y1="250"
                x2="410"
                y2="280"
                stroke="#D4A480"
                strokeWidth="3"
              />

              {/* Muffin */}
              <ellipse cx="380" cy="150" rx="35" ry="15" fill="#8B6F47" />
              <path
                d="M345 150 Q365 100 380 95 Q395 100 415 150 Z"
                fill="#D4B490"
              />
              <circle cx="370" cy="120" r="6" fill="#FFB4A2" />
              <circle cx="390" cy="125" r="5" fill="#FFB4A2" />
              <circle cx="380" cy="110" r="7" fill="#FFB4A2" />

              {/* Decorative elements */}
              <path
                d="M100 370 L103 380 L112 382 L103 384 L100 394 L97 384 L88 382 L97 380 Z"
                fill="#B8E6D5"
              />
              <path
                d="M450 180 L453 190 L462 192 L453 194 L450 204 L447 194 L438 192 L447 190 Z"
                fill="#D4C5F9"
              />
              <circle
                cx="120"
                cy="100"
                r="15"
                fill="#FFD4C4"
                opacity="0.5"
              />
              <circle
                cx="430"
                cy="350"
                r="20"
                fill="#FFB8D2"
                opacity="0.5"
              />
            </svg>

            {/* Graphic 3: Breads & Bagels */}
            <svg
              className="hero-illustration"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Baguette */}
              <ellipse
                cx="250"
                cy="250"
                rx="150"
                ry="35"
                fill="#E8C9A0"
                transform="rotate(-25 250 250)"
              />

              <line
                x1="150"
                y1="290"
                x2="160"
                y2="270"
                stroke="#D4A480"
                strokeWidth="3"
                strokeLinecap="round"
                transform="rotate(-25 155 280)"
              />

              <line
                x1="200"
                y1="275"
                x2="210"
                y2="255"
                stroke="#D4A480"
                strokeWidth="3"
                strokeLinecap="round"
                transform="rotate(-25 205 265)"
              />

              <line
                x1="250"
                y1="260"
                x2="260"
                y2="240"
                stroke="#D4A480"
                strokeWidth="3"
                strokeLinecap="round"
                transform="rotate(-25 255 250)"
              />

              <line
                x1="300"
                y1="245"
                x2="310"
                y2="225"
                stroke="#D4A480"
                strokeWidth="3"
                strokeLinecap="round"
                transform="rotate(-25 305 235)"
              />

              {/* Bagel */}
              <circle cx="380" cy="200" r="50" fill="#D4B490" />
              <circle cx="380" cy="200" r="25" fill="#FFF8F0" />

              <path
                d="M350 180 Q370 175 390 180"
                stroke="#C4A480"
                strokeWidth="2"
                fill="none"
              />

              <path
                d="M370 220 Q380 225 390 220"
                stroke="#C4A480"
                strokeWidth="2"
                fill="none"
              />

              <ellipse cx="360" cy="195" rx="3" ry="2" fill="#E8D4B0" />
              <ellipse cx="370" cy="190" rx="3" ry="2" fill="#E8D4B0" />
              <ellipse cx="395" cy="205" rx="3" ry="2" fill="#E8D4B0" />

              {/* Pretzel */}
              <path
                d="M120 150 Q140 120 160 150 Q180 180 160 210 Q140 240 120 210 Q100 180 120 150 Z"
                fill="#8B6F47"
                stroke="#6B5737"
                strokeWidth="3"
              />

              <circle cx="135" cy="165" r="15" fill="#FFF8F0" />
              <circle cx="145" cy="195" r="15" fill="#FFF8F0" />

              <ellipse cx="125" cy="160" rx="2" ry="3" fill="white" />
              <ellipse cx="140" cy="155" rx="2" ry="3" fill="white" />
              <ellipse cx="155" cy="200" rx="2" ry="3" fill="white" />

              {/* Cinnamon Roll */}
              <circle cx="200" cy="380" r="45" fill="#D4B490" />

              <path
                d="M200 380 Q215 375 220 385 Q220 400 205 405 Q190 405 185 390 Q185 375 200 380 Z"
                fill="#C4A480"
              />

              <path
                d="M200 380 Q210 378 213 385"
                stroke="#8B6F47"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M207 390 Q205 397 198 399"
                stroke="#8B6F47"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              <ellipse
                cx="205"
                cy="385"
                rx="3"
                ry="2"
                fill="white"
                opacity="0.7"
              />

              {/* Bread Loaf */}
              <ellipse cx="350" cy="370" rx="70" ry="35" fill="#E8C9A0" />

              <path
                d="M280 370 Q320 320 350 315 Q380 320 420 370 Z"
                fill="#D4B490"
              />

              <line
                x1="310"
                y1="350"
                x2="315"
                y2="335"
                stroke="#C4A480"
                strokeWidth="2"
              />

              <line
                x1="340"
                y1="340"
                x2="345"
                y2="325"
                stroke="#C4A480"
                strokeWidth="2"
              />

              <line
                x1="370"
                y1="345"
                x2="375"
                y2="330"
                stroke="#C4A480"
                strokeWidth="2"
              />

              {/* Decorative elements */}
              <path
                d="M420 120 L423 130 L432 132 L423 134 L420 144 L417 134 L408 132 L417 130 Z"
                fill="#FFB4A2"
              />

              <path
                d="M80 350 L83 360 L92 362 L83 364 L80 374 L77 364 L68 362 L77 360 Z"
                fill="#B8E6D5"
              />

              <circle
                cx="450"
                cy="300"
                r="18"
                fill="#D4C5F9"
                opacity="0.5"
              />

              <circle
                cx="90"
                cy="80"
                r="22"
                fill="#FFB8D2"
                opacity="0.5"
              />
            </svg>

          </div>
        </div>

      </section>
    </div>
  );
}