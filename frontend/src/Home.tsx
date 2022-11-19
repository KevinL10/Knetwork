import "./home.css";

const Home = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light mx-auto">
        <a className="navbar-brand display">Lorem Ipsum</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#howItWorks">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Costs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQs
              </a>
            </li>
          </ul>
          <button
            className="btn btn-primary rounded-pill my-2 my-sm-0"
            style={{ marginLeft: "0.5rem" }}
            type="button"
          >
            Get started
          </button>
        </div>
      </nav>
      <div style={{ marginTop: 70 }}></div>
      <div className="container">
        <div className="row gx-5 mt-5">
          <div className="col-md">
            <p>Welcome to Lorem,</p>
            <h1 className="display">The best way to Lorem Ipsum.</h1>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum.
            </p>
            <button
              className="btn btn-primary sexy-button rounded-pill my-2 my-sm-0"
              type="button"
            >
              Get started
            </button>
            <button
              className="btn my-2 my-sm-0"
              type="button"
              style={{ color: "var(--info)" }}
            >
              Get started
            </button>
          </div>
          <div className="col-md">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 70 }}></div>
      <div
        className="fade-background"
        id="howItWorks"
        style={{ scrollMargin: "2rem" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-md">
              <img src="" alt="" />
            </div>
            <div className="col-md">
              <p className="small display">‹ HOW IT WORKS</p>
              <h1 className="display">We Lorem Ipsum so you don't have to.</h1>
              <p>
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum.
              </p>
              <button
                className="btn btn-light rounded-pill my-2 my-sm-0"
                type="button"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 70 }}></div>
      <div className="container" id="howItWorks">
        <div className="row gx-5">
          <div className="col-md">
            <p className="small display">WHAT YOU GET ›</p>
            <h1 className="display">Aren't we so cool? Yes, we are.</h1>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum.
            </p>
            <button
              className="btn btn-primary rounded-pill my-2 my-sm-0"
              type="button"
            >
              See more benefits
            </button>
          </div>
          <div className="col-md">
            <div className="staggered-grid">
              <div id="staggered-grid-first">
                <div className="staggered-grid-card">
                  <div className="staggered-grid-badge d-flex justify-content-center align-items-center">
                    <i className="bi bi-arrow-through-heart text-center d-block mx-auto"></i>
                  </div>
                  <p className="display">LOREM IPSUM</p>
                  <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                </div>
              </div>
              <div id="staggered-grid-second">
                <div className="staggered-grid-card">
                  <div className="staggered-grid-badge d-flex justify-content-center align-items-center">
                    <i className="bi bi-arrow-through-heart text-center d-block mx-auto"></i>
                  </div>
                  <p className="display">LOREM IPSUM</p>
                  <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                </div>
              </div>
              <div id="staggered-grid-third">
                <div className="staggered-grid-card">
                  <div className="staggered-grid-badge d-flex justify-content-center align-items-center">
                    <i className="bi bi-arrow-through-heart text-center d-block mx-auto"></i>
                  </div>
                  <p className="display">LOREM IPSUM</p>
                  <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                </div>
              </div>
              <div id="staggered-grid-fourth">
                <div className="staggered-grid-card">
                  <div className="staggered-grid-badge d-flex justify-content-center align-items-center">
                    <i className="bi bi-arrow-through-heart text-center d-block mx-auto"></i>
                  </div>
                  <p className="display">LOREM IPSUM</p>
                  <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 70 }}></div>
      <div className="container">
        <h1
          className="display text-center"
          id="pricing"
          style={{ scrollMargin: "5rem" }}
        >
          Equipment Cost
        </h1>
        <div className="row mt-5">
          <div className="col-md">
            <div className="card pricing-card">
              <div className="pricing-card-badge d-flex justify-content-center align-items-center">
                <i className="bi bi-box2-heart text-center d-block mx-auto"></i>
              </div>
              <div className="card-body">
                <h2 className="display">Base Tier</h2>
                <p>
                  <em>Completely free and open source.</em>
                </p>
                <ul>
                  <li>Unlimited conferences</li>
                  <li>100 participants max</li>
                  <li>Custom Hold Music</li>
                  <li>10 participants max</li>
                </ul>
                <button className="btn btn-primary rounded-pill mx-auto">
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div
              className="card pricing-card"
              id="pricing-card-highlighted-prim"
            >
              <div className="pricing-card-badge d-flex justify-content-center align-items-center">
                <i className="bi bi-sd-card text-center d-block mx-auto"></i>
              </div>
              <div className="card-body">
                <h2 className="display">More storage</h2>
                <p>
                  <em>
                    Get ... more storage (capacity for x more articles), and ...
                  </em>
                </p>
                <ul>
                  <li>Unlimited conferences</li>
                  <li>100 participants max</li>
                  <li>Custom Hold Music</li>
                  <li>10 participants max</li>
                </ul>
                <button className="btn btn-primary rounded-pill">
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div
              className="card pricing-card"
              id="pricing-card-highlighted-sec"
            >
              <div className="pricing-card-badge d-flex justify-content-center align-items-center">
                <i className="bi bi-lightning-charge text-center d-block mx-auto"></i>
              </div>
              <div className="card-body">
                <h2 className="display">More speed</h2>
                <p>
                  <em>
                    Get ... more storage (capacity for x more articles), and ...
                  </em>
                </p>
                <ul>
                  <li>Unlimited conferences</li>
                  <li>100 participants max</li>
                  <li>Custom Hold Music</li>
                  <li>10 participants max</li>
                </ul>
                <button className="btn btn-primary rounded-pill">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 70 }}></div>
      <div className="fade-background-green">
        <div className="container" id="faq" style={{ scrollMargin: "6rem" }}>
          <div className="row gx-5">
            <div className="col-md">
              <img src="" alt="" />
            </div>
            <div className="col-md">
              <p className="small display">‹ FAQ</p>
              <h1 className="display">Frequently Asked Questions</h1>
              <div className="accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What makes this different from Internet in a Box?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well
                      as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How does this help teachers?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What features are planned?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--light-primary)" }}>
        <div className="container" style={{ paddingTop: 70 }}>
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5">
            <div className="col mb-3">
              <a
                href="/"
                className="d-flex align-items-center link-dark text-decoration-none"
                style={{ color: "black" }}
              >
                <h1 className="display">Knetwork</h1>
              </a>
              <p className="text-muted">© 2022</p>
            </div>

            <div className="col-md-7 mb-3">
              <h5>About the project</h5>
              <p>
                Knetwork is our team's submission to HackTheChange 2022. We aim
                to ... (#: TODO)
              </p>
            </div>

            <div className="col mb-3">
              <h5>Find out more</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#howItWorks" className="nav-link p-0 text-muted">
                    How it works
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#pricing" className="nav-link p-0 text-muted">
                    Costs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#faq" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
