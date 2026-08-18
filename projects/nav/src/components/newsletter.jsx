export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">

        <div className="newsletter-content">

          <div className="newsletter-icon">
            💌
          </div>

          <h2>Join Our Sweet Club!</h2>

          <p>
            Subscribe to get exclusive deals, new menu items, and sweet
            surprises delivered to your inbox every week!
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you for subscribing! 💕");
            }}
          >
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              required
            />

            <button
              type="submit"
              className="newsletter-submit"
            >
              Subscribe ✨
            </button>
          </form>

          <div className="newsletter-benefits">

            <div className="newsletter-benefit">
              Weekly special offers
            </div>

            <div className="newsletter-benefit">
              First access to new treats
            </div>

            <div className="newsletter-benefit">
              Birthday surprises
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}