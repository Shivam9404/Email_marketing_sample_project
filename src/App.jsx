import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">MailBoost</div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="btn">Start Free</button>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1>Email marketing that grows your business</h1>

          <p>
            Create beautiful email campaigns, automate workflows and engage your
            customers with smarter email marketing.
          </p>

          <div className="email-box">
            <input type="email" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="email marketing dashboard"
          />
        </div>
      </section>

      <section className="services" id="features">
        <h2>Services We Provide</h2>

        <div className="service-row">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="B2C Email Sending"
            />
          </div>

          <div className="service-text">
            <h3>B2C Email Sending</h3>
            <p>
              Reach customers directly with high-volume email campaigns built
              for inbox placement, engagement and conversions. From newsletters
              to promotional offers, we help brands scale customer acquisition.
            </p>
          </div>
        </div>

        <div className="service-row reverse">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Audience Targeting"
            />
          </div>

          <div className="service-text">
            <h3>Audience Segmentation & Offer Promotion</h3>
            <p>
              We deliver targeted campaigns using audience behavior,
              demographics and engagement data—helping affiliate partners
              promote offers to the right users at the right time.
            </p>
          </div>
        </div>

        <div className="service-row">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Analytics"
            />
          </div>

          <div className="service-text">
            <h3>Performance Tracking & Optimization</h3>
            <p>
              Monitor opens, clicks and conversions in real time. We optimize
              campaigns continuously to improve ROI and help partners scale
              winning offers faster.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h3>MailBoost</h3>
          <p>Email marketing made simple.</p>
        </div>

        <div>
          <h4>Address</h4>
          <p>Office No. 23,Vighnaharta prasad Society</p>
          <p>Manaji Nagar, Pune, Maharashtra 411045</p>
          <p>India</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: shivamshinde94046788@gmail.com</p>
          <p>Phone: +91 7875563010</p>
        </div>
      </footer>
    </div>
  );
}

export default App;