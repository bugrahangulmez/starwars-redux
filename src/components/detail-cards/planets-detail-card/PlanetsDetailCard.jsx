import { Link } from "react-router-dom";

const PlanetsDetailCard = ({ detail }) => {
  return (
    <div className="container">
      <section className="btn-back">
        <Link to={".."}>{"< Back"}</Link>
      </section>
      <div className="container-inner">
        <p className="name">{detail.name}</p>
        <div className="detail-container">
          <section className="first">
            <p className="title-first">Rotation Period</p>
            <p className="first">{detail.rotation_period}</p>
            <p className="title-second">Orbital Period</p>
            <p className="second">{detail.orbital_period}</p>
            <p className="title-third">Diameter</p>
            <p className="third">{detail.diameter}</p>
            <p className="title-third">Surface Water</p>
            <p className="third">{detail.surface_water}</p>
          </section>
          <section className="second">
            <p className="title-fourth">Climate</p>
            <p className="fourth">{detail.climate}</p>
            <p className="title-fifth">Gravity</p>
            <p className="fifth">{detail.gravity}</p>
            <p className="title-sixth">Terrain</p>
            <p className="sixth">{detail.terrain}</p>
            <p className="title-sixth">Population</p>
            <p className="sixth">{detail.population}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PlanetsDetailCard;
