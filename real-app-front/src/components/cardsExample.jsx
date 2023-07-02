import { Link } from "react-router-dom";

const CardsExample = () => {
  return (
    <>
      <p>
        You do not have any business cards that you have created, the cards in
        front of you are examples of how you will create your own cards (if you
        are a business user). When the system recognizes existing cards that you
        created, it will display the last three cards that you created on the
        home page.
      </p>
      <div className="row">
        <div className="card m-2" style={{ width: "300px" }}>
          <img
            style={{ width: "262px", height: "262px" }}
            src="https://cdn.pixabay.com/photo/2020/04/01/19/36/showcase-4992402_640.jpg"
            className="card-img-top mx-1 mt-3"
            alt="Bakery"
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Boulangerie</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-house-fill mx-2"></i>50 Rothschild St. Tel
              Aviv
            </li>
            <li className="list-group-item">
              <i className="bi bi-telephone-fill mx-2"></i>03-9723636
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-chat-left-text-fill mx-2"></i>A neighborhood
              boutique <span className="mx-4"> bakery</span>{" "}
            </li>
            <li className="list-group-item">
              <Link to="#" className="link-dark">
                <i className="bi bi-geo-alt-fill mx-2"></i>
                Google Map
              </Link>
            </li>
          </ul>
          <div className="card-body">
            <Link to="#" className="card-link">
              Edit
            </Link>
            <Link to="#" className="card-link">
              Delete
            </Link>
            <Link to="#" className="card-link">
              Show
            </Link>
          </div>
        </div>
        <div className="card m-2" style={{ width: "300px" }}>
          <img
            style={{ width: "262px", height: "262px" }}
            src="https://cdn.pixabay.com/photo/2022/09/07/21/53/cat-7439657_640.png"
            className="card-img-top mx-1 mt-3"
            alt="Pet supermarket"
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Pet supermarket</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-house-fill mx-2"></i>26 Ben Yehuda St. Netanya
            </li>
            <li className="list-group-item">
              <i className="bi bi-telephone-fill mx-2"></i>09-3345212
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-chat-left-text-fill mx-2"></i>Outlet for pet
              products <span className="mx-4"> bakery</span>{" "}
            </li>
            <li className="list-group-item">
              <Link to="#" className="link-dark">
                <i className="bi bi-geo-alt-fill mx-2"></i>
                Google Map
              </Link>
            </li>
          </ul>
          <div className="card-body">
            <Link to="#" className="card-link">
              Edit
            </Link>
            <Link to="#" className="card-link">
              Delete
            </Link>
            <Link to="#" className="card-link">
              Show
            </Link>
          </div>
        </div>
        <div className="card m-2" style={{ width: "300px" }}>
          <img
            style={{ width: "262px", height: "262px" }}
            src="https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_640.jpg"
            className="card-img-top mx-1 mt-3"
            alt="Go-Active"
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Go-Active</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-house-fill mx-2"></i>13 Shapira St. Petah
              Tikva
            </li>
            <li className="list-group-item">
              <i className="bi bi-telephone-fill mx-2"></i>03-9318890
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-chat-left-text-fill mx-2"></i>Neighborhood gym{" "}
              <span className="mx-4"></span>{" "}
            </li>
            <li className="list-group-item">
              <Link to="#" className="link-dark">
                <i className="bi bi-geo-alt-fill mx-2"></i>
                Google Map
              </Link>
            </li>
          </ul>
          <div className="card-body">
            <Link to="#" className="card-link">
              Edit
            </Link>
            <Link to="#" className="card-link">
              Delete
            </Link>
            <Link to="#" className="card-link">
              Show
            </Link>
          </div>
        </div>
        <div className="card m-2" style={{ width: "300px" }}>
          <img
            style={{ width: "262px", height: "262px" }}
            src="https://cdn.pixabay.com/photo/2016/11/17/19/24/spain-1832468_640.jpg"
            className="card-img-top mx-1 mt-3"
            alt="A place of meat"
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">A place of meat</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-house-fill mx-2"></i>1 Ben Zvi St. Eilat
            </li>
            <li className="list-group-item">
              <i className="bi bi-telephone-fill mx-2"></i>08-4555218
            </li>
            <li className="list-group-item">
              <i className="bi bi-chat-left-text-fill mx-2"></i>A butcher shop
              that also offers catering services{" "}
              <span className="mx-4"> bakery</span>{" "}
            </li>
            <li className="list-group-item">
              <Link to="#" className="link-dark">
                <i className="bi bi-geo-alt-fill mx-2"></i>
                Google Map
              </Link>
            </li>
          </ul>
          <div className="card-body">
            <Link to="#" className="card-link">
              Edit
            </Link>
            <Link to="#" className="card-link">
              Delete
            </Link>
            <Link to="#" className="card-link">
              Show
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsExample;
