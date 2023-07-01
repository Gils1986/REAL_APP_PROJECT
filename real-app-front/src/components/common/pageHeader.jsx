const PageHeader = ({ title, smTitle, description }) => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <h5> {smTitle}</h5>
          <h1>{title}</h1>
        </div>
      </div>
      {description ? (
        <div className="row mt-2">
          <div className="col-12">
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PageHeader;
