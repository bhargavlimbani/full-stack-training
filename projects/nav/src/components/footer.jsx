export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">

        <div className="footer-grid">

          {/* Visit Us */}
          <div className="footer-section">
            <h3>Visit Us</h3>

            <p>
              123 Sweet Street
              <br />
              Cupcake City, CC 12345
            </p>

            <p>Open Daily: 8am - 8pm</p>
          </div>


          {/* Contact */}
          <div className="footer-section">
            <h3>Contact</h3>

            <a href="tel:555-CAKE">
              📞 (555) CAKE-123
            </a>

            <a href="mailto:hello@sweetdreams.com">
              ✉️ hello@sweetdreams.com
            </a>

            <div className="social-links">

              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#8DC4B2"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="#8DC4B2"
                    strokeWidth="2"
                    fill="none"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="#8DC4B2"
                    strokeWidth="2"
                    fill="none"
                  />

                  <circle
                    cx="18"
                    cy="6"
                    r="1"
                    fill="#8DC4B2"
                  />
                </svg>
              </a>


              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#8DC4B2"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>


              {/* Twitter */}
              <a href="#" aria-label="Twitter">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#8DC4B2"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>


              {/* YouTube */}
              <a href="#" aria-label="YouTube">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#8DC4B2"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />

                  <polygon
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    fill="#FFF8F0"
                  />
                </svg>
              </a>

            </div>
          </div>


          {/* Opening Hours */}
          <div className="footer-section">
            <h3>Opening Hours</h3>

            <p>Monday - Friday: 8am - 8pm</p>

            <p>Saturday: 8am - 9pm</p>

            <p>Sunday: 9am - 7pm</p>

            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem"
              }}
            >
              🎂 Special orders available daily!
            </p>
          </div>

        </div>


        {/* Copyright */}
        <div className="copyright">

          <p>
            © 2026 Sweet Dreams Bakery. Made with ♡ and sugar.
            All rights reserved.
          </p>

          <p
            style={{
              marginTop: "0.5rem"
            }}
          >
            Designed by{" "}
            <a
              href="https://www.tooplate.com"
              target="_blank"
              rel="nofollow"
              style={{
                color: "#B5EAD7",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              Tooplate
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}