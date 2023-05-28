import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleDetail, handleParams } from "../../../redux/detailSlice";

const PeopleListCard = ({ item }) => {
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
          <p className="model-title">Gender</p>
          <p className="model">{item.gender}</p>
          <p className="hyperdrive-title">Skin Color</p>
          <p className="hyperdrive">{item.skin_color}</p>
        </section>
        <section className="ship-card-second">
          <p className="passengers-title">Hair Color</p>
          <p className="passengers">{item.hair_color}</p>
          <p className="mas-title">Height</p>
          <p className="mas">{item.height}</p>
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
export default PeopleListCard;
