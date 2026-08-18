export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">

        <div className="about-text">
          <h2>Our Sweet Story 💕</h2>

          <p>
            Sweet Dreams Bakery was born from a love of all things cute and
            delicious! We believe that desserts should bring joy not just to
            your taste buds, but to your eyes and heart too.
          </p>

          <p>
            Every morning, our passionate bakers arrive before dawn to create
            the freshest, most adorable treats you've ever seen. From our
            signature rainbow cupcakes to our smiling macarons, each item is
            handcrafted with premium ingredients and endless love.
          </p>

          <p>
            Come visit our cozy café, snap some photos with our kawaii
            creations, and experience the magic of Sweet Dreams!
          </p>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              marginTop: "1rem",
              display: "inline-block"
            }}
          >
            Visit Us Today
          </a>
        </div>

        <div className="about-image">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cute chef character */}

            <circle
              cx="200"
              cy="180"
              r="80"
              fill="#FFD4C4"
            />

            <circle
              cx="175"
              cy="165"
              r="10"
              fill="#8DC4B2"
            />

            <circle
              cx="225"
              cy="165"
              r="10"
              fill="#8DC4B2"
            />

            <path
              d="M180 195Q200 210 220 195"
              stroke="#8DC4B2"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            <circle
              cx="165"
              cy="175"
              r="15"
              fill="#FFB4A2"
            />

            <circle
              cx="235"
              cy="175"
              r="15"
              fill="#FFB4A2"
            />


            {/* Chef hat */}

            <ellipse
              cx="200"
              cy="100"
              rx="70"
              ry="30"
              fill="white"
            />

            <rect
              x="130"
              y="95"
              width="140"
              height="15"
              fill="white"
            />


            {/* Apron */}

            <path
              d="M140 260L200 270L260 260L240 350Q200 360 160 350Z"
              fill="#B8E6D5"
            />

            <circle
              cx="200"
              cy="300"
              r="8"
              fill="#FFB4A2"
            />


            {/* Heart */}

            <path
              d="M190 310L200 320L210 310Q215 305 215 300Q215 290 205 290Q200 290 200 295Q200 290 195 290Q185 290 185 300Q185 305 190 310Z"
              fill="#FF6B9D"
            />

          </svg>
        </div>

      </div>
    </section>
  );
}