export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="menu-container">

        <h2 className="section-title">
          Our Sweet Menu 🧁
        </h2>

        <p className="section-subtitle">
          Handcrafted with love and a sprinkle of magic
        </p>

        <div className="menu-grid">

          <div className="menu-item">
            <div className="menu-item-image">
              <img
                src="public/images/rainbow-cupcakes.jpg"
                alt="Rainbow Cupcakes"
              />
              <div className="menu-item-overlay"></div>
              <span className="menu-item-badge">
                ⭐ Bestseller
              </span>
            </div>

            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3>Rainbow Dream Cupcakes</h3>
                <span className="menu-item-price">$4.50</span>
              </div>

              <p>
                Fluffy vanilla cake topped with swirled rainbow
                buttercream, edible glitter, and a cherry on top.
                Pure kawaii magic!
              </p>

              <div className="menu-item-tags">
                <span className="tag">🌈 Colorful</span>
                <span className="tag">✨ Gluten-Free</span>
              </div>

              <button className="add-to-cart">
                <span>Add to Cart ♡</span>
              </button>
            </div>
          </div>


          <div className="menu-item">
            <div className="menu-item-image">
              <img
                src="public/images/glazed-donuts.jpg"
                alt="Glazed Donuts"
              />
              <div className="menu-item-overlay"></div>
              <span className="menu-item-badge">
                🍓 Fresh Today
              </span>
            </div>

            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3>Strawberry Glazed Donuts</h3>
                <span className="menu-item-price">$3.50</span>
              </div>

              <p>
                Soft and fluffy donuts with sweet strawberry glaze
                and rainbow sprinkles. A breakfast favorite!
              </p>

              <div className="menu-item-tags">
                <span className="tag">🍓 Berry Fresh</span>
              </div>

              <button className="add-to-cart">
                <span>Add to Cart ♡</span>
              </button>
            </div>
          </div>


          <div className="menu-item">
            <div className="menu-item-image">
              <img
                src="public/images/french-macarons.jpg"
                alt="French Macarons"
              />
              <div className="menu-item-overlay"></div>
            </div>

            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3>Pastel Macarons</h3>
                <span className="menu-item-price">$2.50</span>
              </div>

              <p>
                Delicate French macarons in lavender, rose, and mint
                flavors with creamy fillings
              </p>

              <div className="menu-item-tags">
                <span className="tag">🇫🇷 French</span>
                <span className="tag">💜 Lavender</span>
              </div>

              <button className="add-to-cart">
                <span>Add to Cart ♡</span>
              </button>
            </div>
          </div>


          <div className="menu-item">
            <div className="menu-item-image">
              <img
                src="public/images/chocolate-cookies.jpg"
                alt="Chocolate Cookies"
              />
              <div className="menu-item-overlay"></div>
            </div>

            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3>Choco Chip Cookies</h3>
                <span className="menu-item-price">$2.00</span>
              </div>

              <p>
                Classic chocolate chip cookies, perfectly crispy on
                edges and chewy in the center
              </p>

              <div className="menu-item-tags">
                <span className="tag">🍪 Classic</span>
              </div>

              <button className="add-to-cart">
                <span>Add to Cart ♡</span>
              </button>
            </div>
          </div>


          <div className="menu-item">
            <div className="menu-item-image">
              <img
                src="public/images/decorated-cake.jpg"
                alt="Decorated Cake"
              />
              <div className="menu-item-overlay"></div>
              <span className="menu-item-badge">
                💝 Custom
              </span>
            </div>

            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3>Kawaii Birthday Cake</h3>
                <span className="menu-item-price">$45.00</span>
              </div>

              <p>
                Custom-designed celebration cake with your choice of
                flavors and adorable decorations
              </p>

              <div className="menu-item-tags">
                <span className="tag">🎂 Custom</span>
                <span className="tag">💕 Pre-Order</span>
              </div>

              <button className="add-to-cart">
                <span>Pre-Order Now ♡</span>
              </button>
            </div>
          </div>


          <div className="menu-item">
            <div className="menu-item-image">
              <img
                src="public/images/brownies.jpg"
                alt="Brownies"
              />
              <div className="menu-item-overlay"></div>
              <span className="menu-item-badge">
                🍫 Fudgy
              </span>
            </div>

            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3>Happy Face Brownies</h3>
                <span className="menu-item-price">$3.00</span>
              </div>

              <p>
                Rich, fudgy brownies topped with cream cheese frosting
                and a sweet smile
              </p>

              <div className="menu-item-tags">
                <span className="tag">😊 Happy</span>
                <span className="tag">🍫 Rich</span>
              </div>

              <button className="add-to-cart">
                <span>Add to Cart ♡</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}