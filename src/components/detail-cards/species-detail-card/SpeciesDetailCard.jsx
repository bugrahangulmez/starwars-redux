import { Link } from "react-router-dom";

const SpeciesDetailCard = ({ detail }) => {
  return (
    <div className="container">
      <section className="btn-back">
        <Link to={".."}>{"< Back"}</Link>
      </section>
      <div className="container-inner">
        <p className="name">{detail.name}</p>
        <div className="detail-container">
          <section className="first">
            <p className="title-first">Classification</p>
            <p className="first">{detail.classification}</p>
            <p className="title-second">Designation</p>
            <p className="second">{detail.designation}</p>
            <p className="title-third">Average Height</p>
            <p className="third">{detail.average_height}</p>
          </section>
          <section className="second">
            <p className="title-fourth">Skin Colors</p>
            <p className="fourth">{detail.skin_colors}</p>
            <p className="title-fifth">Eye Colors</p>
            <p className="fifth">{detail.eye_colors}</p>
            <p className="title-sixth">Average Lifespan</p>
            <p className="sixth">{detail.average_lifespan}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default SpeciesDetailCard;
