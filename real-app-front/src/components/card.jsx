import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizPhone, bizAddress, bizImage },
}) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        style={{ width: "262px", height: "262px" }}
        src={bizImage}
        className="card-img-top mt-3"
        alt={bizName}
      />
      <div className="card-body">
        <h5 className="card-title">
          <Link className="link-dark">{bizName}</Link>
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="bi bi-house-fill mx-2"></i>
          {bizAddress}
        </li>
        <li className="list-group-item">
          <i className="bi bi-telephone-fill mx-2"></i>
          {bizPhone}
        </li>
        <li className="list-group-item">
          <i className="bi bi-chat-left-text-fill mx-2"></i>
          {bizDescription}
        </li>
        <li className="list-group-item">
          <Link
            to={`https://www.google.com/maps/place/${bizAddress}`}
            target={`_blank`}
            className="link-dark"
          >
            <i className="bi bi-geo-alt-fill mx-2"></i>
            Google Map
          </Link>
        </li>
      </ul>
      <div className="card-body">
        <Link to={`/my-cards/edit/${_id}`} className="card-link">
          Card Edit
        </Link>
        <Link to={`/my-cards/delete/${_id}`} className="card-link">
          Card Delete
        </Link>
        <Link to={`/my-cards/show/${_id}`} className="card-link">
          Show
        </Link>
      </div>
    </div>
  );
};
export default Card;
