import Logo from "../../assets/StarwarsLogo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  getCategories,
  handleGroup,
  handlePage,
  handleActiveBtn,
  handleActiveCategory,
} from "../../redux/swapiSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleDetail, handleParams } from "../../redux/detailSlice";

const Header = () => {
  const {
    categories: { categories: catList, active },
    group,
    itemList: { page, activeBtn },
  } = useSelector((store) => store.swapi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories("https://swapi.dev/api/"));
  }, []);
  useEffect(() => {}, [active]);

  return (
    <div id="header">
      <section className="container">
        <div className="top">
          <img src={Logo} alt="StarWars" />
          <h1 className="dim">StarWars</h1>
        </div>
        <div className="bottom">
          {catList.map((item) => {
            return (
              <Link
                className={active === item ? "active-btn-category" : null}
                onClick={() => {
                  dispatch(handleGroup(item));
                  dispatch(handlePage(1));
                  dispatch(handleActiveBtn(1));
                  dispatch(handleActiveCategory(item));
                  dispatch(handleDetail(null));
                  dispatch(handleParams(""));
                }}
                key={item}
                to={"/"}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Header;
