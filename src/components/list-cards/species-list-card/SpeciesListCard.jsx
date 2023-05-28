import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleDetail, handleParams } from "../../../redux/detailSlice";

const SpeciesListCard = ({ item }) => {
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
          <p className="model-title">Classification</p>
          <p className="model">{item.classification}</p>
          <p className="hyperdrive-title">Designation</p>
          <p className="hyperdrive">{item.designation}</p>
        </section>
        <section className="ship-card-second">
          <p className="passengers-title">Designation</p>
          <p className="passengers">{item.designation}</p>
          <p className="mas-title">Language</p>
          <p className="mas">{item.language}</p>
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
export default SpeciesListCard;
