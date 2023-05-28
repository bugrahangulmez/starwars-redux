import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleDetail, handleParams } from "../../../redux/detailSlice";

const ShipListCard = ({ item }) => {
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
          <p className="model-title">Model</p>
          <p className="model">{item.model}</p>
          <p className="hyperdrive-title">Hyperdrive Rating</p>
          <p className="hyperdrive">{item.hyperdrive_rating}</p>
        </section>
        <section className="ship-card-second">
          <p className="passengers-title">Passengers</p>
          <p className="passengers">{item.passengers}</p>
          <p className="mas-title">Max Atmosphering Speed</p>
          <p className="mas">{item.max_atmosphering_speed}</p>
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
export default ShipListCard;
