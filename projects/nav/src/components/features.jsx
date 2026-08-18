export default function Features() {
  return (
    <section className="features">
      <h2 className="section-title">
        Why We're Special ✨
      </h2>

      <p className="section-subtitle">
        Discover what makes our bakery a sweet paradise
      </p>

      <div className="features-grid">

        <div className="feature-card">
          <svg
            className="feature-icon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="#FFD4C4"
            />

            <path
              d="M30 45L45 60L70 35"
              stroke="#8DC4B2"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h3>Freshly Baked Daily</h3>

          <p>
            Every treat is made fresh each morning with love and
            the finest ingredients
          </p>
        </div>

        <div className="feature-card">
          <svg
            className="feature-icon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 20L60 45H80L65 58L72 83L50 68L28 83L35 58L20 45H40L50 20Z"
              fill="#FFB8D2"
            />
          </svg>

          <h3>Instagram-Worthy</h3>

          <p>
            Our kawaii creations are almost too cute to eat
            (but definitely too delicious not to!)
          </p>
        </div>

        <div className="feature-card">
          <svg
            className="feature-icon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="35"
              cy="40"
              r="20"
              fill="#B8E6D5"
            />

            <circle
              cx="65"
              cy="40"
              r="20"
              fill="#D4C5F9"
            />

            <circle
              cx="50"
              cy="60"
              r="20"
              fill="#FFB4A2"
            />
          </svg>

          <h3>Custom Orders</h3>

          <p>
            Special occasion? We'll create the perfect custom
            treats for your celebration
          </p>
        </div>

      </div>
    </section>
  );
}

