const Choices = () => {
  return (
    <>
      <div className="d-flex h-100 justify-content-center align-items-center">
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
                      Get ... more storage (capacity for x more articles), and
                      ...
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
                      Get ... more storage (capacity for x more articles), and
                      ...
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
      </div>
    </>
  );
};

export default Choices;
