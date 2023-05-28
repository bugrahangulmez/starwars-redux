import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleDetail, handleParams } from "../../../redux/detailSlice";

const FilmListCard = ({ item }) => {
  const dispatch = useDispatch();
  const {
    itemList: { itemList: listOfItems },
  } = useSelector((store) => store.swapi);

  const handleDispatch = () => {
    const currentItem = listOfItems.find(
      (element) => element.title.toLowerCase() === item.title.toLowerCase()
    );
    dispatch(handleParams(item.title));
    dispatch(handleDetail(currentItem));
  };
  return (
    <div className="card-container-starships">
      <Link className="link-to-detail" to={item.title} onClick={handleDispatch}>
        <p className="name">{item.title}</p>
      </Link>
    </div>
  );
};
export default FilmListCard;
