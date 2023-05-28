import { Link } from "react-router-dom";

const ShipDetailCard = ({ detail }) => {
  return (
    <div className="container">
      <section className="btn-back">
        <Link to={".."}>{"< Back"}</Link>
      </section>
      <div className="container-inner">
        <p className="name">{detail.name}</p>
        <div className="detail-container">
          <section className="first">
            <p className="title-first">Model</p>
            <p className="first">{detail.model}</p>
            <p className="title-second">Passengers</p>
            <p className="second">{detail.passengers}</p>
            <p className="title-third">Max Atmosphering Speed</p>
            <p className="third">{detail.max_atmosphering_speed}</p>
          </section>
          <section className="second">
            <p className="title-fourth">Manufacturer</p>
            <p className="fourth">{detail.manufacturer}</p>
            <p className="title-fifth">Crew</p>
            <p className="fifth">{detail.crew}</p>
            <p className="title-sixth">Cargo Capacity</p>
            <p className="sixth">{detail.cargo_capacity}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ShipDetailCard;
