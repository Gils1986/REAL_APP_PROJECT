import { Link } from "react-router-dom";

const Event = ({ img, description }) => {
  return (
    <div className="card m-3 bg-light bg-gradient" style={{ width: "18rem" }}>
      <img
        style={{ width: "262px", height: "262px" }}
        src={img}
        className="card-img-top mt-3"
        alt={img}
      />
       <div className="card-body d-flex flex-column align-items-center">
        <h3 className="card-title">
          <p className="link-dark fw-bold">{description}</p>
        </h3>
      </div>
    </div>
  );
};
export default Event;
