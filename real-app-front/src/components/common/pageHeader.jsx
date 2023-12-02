const PageHeader = ({ img, title, smTitle, description, secondDis }) => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <img
              src={img}
              alt="gift"
              className="mr-2 mt-1 img-fluid"
              style={{ height: "2em", width: "auto" }}
            />
            <div>
              <h1
                className="h1 mt-2 mb-0 text-1"
                style={{ marginLeft: "0.8rem" }}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <p className="mt-4">{description}</p>
          <h3 className="h3 mt-5 text-1">{smTitle}</h3>
          <p className="mt-4">{secondDis}</p>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
