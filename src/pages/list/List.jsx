import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ShipListCard,
  PeopleListCard,
  PlanetListCard,
  SpeciesListCard,
  FilmListCard,
  VehiclesListCard,
} from "../../components";
import {
  getItemList,
  handlePage,
  handleActiveBtn,
} from "../../redux/swapiSlice";

const List = () => {
  const {
    group,
    itemList: { itemList: list, isLoading, page, pageArray, activeBtn },
  } = useSelector((store) => store.swapi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemList(`https://swapi.dev/api/${group}/?page=${page}`));
  }, [group, page]);
  if (isLoading) {
    return (
      <div id="main">
        <section
          style={{ display: "flex", alignItems: "center" }}
          className="container"
        >
          <h2>Loading...</h2>
        </section>
      </div>
    );
  }
  return (
    <div id="main">
      <section className="container">
        <div className="btn-page-container">
          {pageArray.length > 1 &&
            pageArray.map((item) => {
              return (
                <button
                  className={activeBtn === item ? "active" : null}
                  key={item}
                  onClick={() => {
                    dispatch(handlePage(item));
                    dispatch(handleActiveBtn(item));
                  }}
                >
                  {item}
                </button>
              );
            })}
        </div>

        {list.map((item, index) => {
          return group === "starships" ? (
            <ShipListCard item={item} key={index} />
          ) : group === "people" ? (
            <PeopleListCard item={item} key={index} />
          ) : group === "planets" ? (
            <PlanetListCard item={item} key={index} />
          ) : group === "species" ? (
            <SpeciesListCard item={item} key={index} />
          ) : group === "films" ? (
            <FilmListCard item={item} key={index} />
          ) : group === "vehicles" ? (
            <VehiclesListCard item={item} key={index} />
          ) : null;
        })}

        <div className="btn-page-container">
          {pageArray.length > 1 &&
            pageArray.map((item) => {
              return (
                <button
                  className={activeBtn === item ? "active" : null}
                  key={item}
                  onClick={() => {
                    dispatch(handlePage(item));
                    dispatch(handleActiveBtn(item));
                  }}
                >
                  {item}
                </button>
              );
            })}
        </div>
      </section>
    </div>
  );
};
export default List;
