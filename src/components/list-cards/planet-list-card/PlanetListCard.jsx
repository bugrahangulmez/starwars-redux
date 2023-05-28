import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleDetail, handleParams } from "../../../redux/detailSlice";

const PlanetListCard = ({ item }) => {
  const dispatch = useDispatch();
  const {
    itemList: { itemList: listOfItems },
  } = useSelector((store) => store.swapi);

  const handleDispatch = () => {
    const currentItem = listOfItems.find(
      (element) => element.name.toLowerCase() === item.name.toLowerCase()
    );
    dispatch(handleParams(item.name));
    dispatch(handleDetail(currentItem));
  };
  return (
    <div className="card-container-starships">
      <p className="name">{item.name}</p>
      <div className="container-card-inner">
        <section className="ship-card-first">
          <p className="model-title">Climate</p>
          <p className="model">{item.climate}</p>
          <p className="hyperdrive-title">Diameter</p>
          <p className="hyperdrive">{item.diameter}</p>
        </section>
        <section className="ship-card-second">
          <p className="passengers-title">Gravity</p>
          <p className="passengers">{item.gravity}</p>
          <p className="mas-title">Population</p>
          <p className="mas">{item.population}</p>
        </section>
      </div>
      <section className="btn-container">
        <Link to={item.name} onClick={handleDispatch}>
          Detail
        </Link>
      </section>
    </div>
  );
};
export default PlanetListCard;
