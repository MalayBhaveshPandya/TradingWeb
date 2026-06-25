import react from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-2 mb-5">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo
              <i class="fa fa-long-arrow-right" aria-hidden="false">
                →
              </i>
            </a>
            <a
              href={learnMore}
              className="text-decoration-none"
              style={{ marginLeft: "1rem" }}
            >
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="false">
                →
              </i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} className="text-decoration-none">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a
              href={appStore}
              className="text-decoration-none"
              style={{ marginLeft: "1rem" }}
            >
              <img src="media/images/appStoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
