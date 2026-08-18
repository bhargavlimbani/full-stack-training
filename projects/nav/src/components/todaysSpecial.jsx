export default function TodaysSpecial() {
  return (
    <section className="todays-special">
      <div className="special-container">

        <div style={{ textAlign: "center" }}>
          <span className="special-badge">
            ⚡ LIMITED TIME OFFER ⚡
          </span>

          <h2
            className="section-title"
            style={{ marginBottom: "0.5rem" }}
          >
            Today's Special
          </h2>

          <p className="section-subtitle">
            Hurry! This sweet deal won't last long! 🎯
          </p>
        </div>

        <div className="special-content">

          <div className="special-image">
            <img
              src="public/images/unicorn-dream-cake.jpg"
              alt="Unicorn Dream Cake"
            />

            <span className="special-tag">
              🦄 50% OFF!
            </span>

            <div className="stock-indicator">
              <div>
                ⚡ Only <strong>7 left</strong> in stock!
              </div>

              <div className="stock-bar">
                <div
                  className="stock-fill"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="special-details">

            <h2>Unicorn Dream Cake</h2>

            <div className="special-price-row">
              <span className="special-original-price">
                $24.00
              </span>

              <span className="special-price">
                $12.00
              </span>

              <span className="special-discount">
                50% OFF
              </span>
            </div>

            <p className="special-description">
              A magical rainbow-layered cake with vanilla buttercream,
              topped with edible glitter, colorful swirls, and a golden horn.
              Perfect for birthdays or just making any day special! This
              enchanting creation is handcrafted fresh daily.
            </p>

            <div className="countdown-container">

              <div className="countdown-label">
                ⏰ Offer Ends In:
              </div>

              <div className="countdown">

                <div className="countdown-item">
                  <span className="countdown-number" id="days">
                    00
                  </span>
                  <span className="countdown-label-text">
                    Days
                  </span>
                </div>

                <div className="countdown-item">
                  <span className="countdown-number" id="hours">
                    00
                  </span>
                  <span className="countdown-label-text">
                    Hours
                  </span>
                </div>

                <div className="countdown-item">
                  <span className="countdown-number" id="minutes">
                    00
                  </span>
                  <span className="countdown-label-text">
                    Minutes
                  </span>
                </div>

                <div className="countdown-item">
                  <span className="countdown-number" id="seconds">
                    00
                  </span>
                  <span className="countdown-label-text">
                    Seconds
                  </span>
                </div>

              </div>
            </div>

            <div className="special-cta">
              <button className="btn-special">
                <span>🛒 Grab This Deal Now!</span>
              </button>

              <button className="btn-notify">
                <span>🔔</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}