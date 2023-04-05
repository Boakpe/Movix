import { Link } from "react-router-dom";

const Card = ({ id, title, description, image, api_id }) => {
  return (
    <div className="col-md-3 mb-3 d-flex align-items-stretch">
      <div className="card game-card ">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate text-white">
            <strong>{title}</strong>
          </h5>

          <p className="card-text text-secondary text-truncate">{description}</p>
          <Link to={"/movies/" + id} state={{from: api_id}} className="btn btn-outline-primary mt-auto align-self-start">More info</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
