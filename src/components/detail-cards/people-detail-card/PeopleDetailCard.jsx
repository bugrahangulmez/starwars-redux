import { Link } from "react-router-dom";

const PeopleDetailCard = ({ detail }) => {
  return (
    <div className="container">
      <section className="btn-back">
        <Link to={".."}>{"< Back"}</Link>
      </section>
      <div className="container-inner">
        <p className="name">{detail.name}</p>
        <p className="gender">{"Gender: " + detail.gender}</p>
        <div className="detail-container">
          <section className="first">
            <p className="title-first">Height</p>
            <p className="first">{detail.height}</p>
            <p className="title-second">Mass</p>
            <p className="second">{detail.mass}</p>
            <p className="title-third">Hair Color</p>
            <p className="third">{detail.hair_color}</p>
          </section>
          <section className="second">
            <p className="title-fourth">Skin Color</p>
            <p className="fourth">{detail.skin_color}</p>
            <p className="title-fifth">Eye Color</p>
            <p className="fifth">{detail.eye_color}</p>
            <p className="title-sixth">Birth Year</p>
            <p className="sixth">{detail.birth_year}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PeopleDetailCard;
