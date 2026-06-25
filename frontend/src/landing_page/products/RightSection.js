import react from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-2 mb-5">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-3">
            <a
              href={learnMore}
              className="text-decoration-none"
            >
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="false">
                →
              </i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt={productName} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
