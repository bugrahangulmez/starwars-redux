import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFilmDetail } from "../../../redux/detailSlice";
import { useDispatch, useSelector } from "react-redux";

const FilmsDetailCard = ({ detail }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    detail.characters.forEach((item) => dispatch(getFilmDetail(item)));
  }, []);
  const {
    filmDetail: { isLoading, characters },
  } = useSelector((store) => store.detail);
  console.log("filmDetail: ", characters);
  console.log("film detail component rendered");

  return (
    <div className="container">
      <section className="btn-back">
        <Link to={".."}>{"< Back"}</Link>
      </section>
      <div className="container-inner">
        <p className="name">{detail.title}</p>
        <div className="detail-container">
          <section className="first">
            <p className="title-first">Director</p>
            <p className="first">{detail.director}</p>
            <p className="title-second">Producer</p>
            <p className="second">{detail.producer}</p>
            <p className="title-third">Release Date</p>
            <p className="third">{detail.release_date}</p>
            <p className="title-third">Opening Crawl</p>
            <p className="third">{detail.opening_crawl}</p>
            <Link
              onClick={() => {
                setIsShown(!isShown);
              }}
            >
              <p className="title-first">Characters</p>
            </Link>
            {isLoading === false &&
              characters.map((item) => {
                return (
                  <>
                    <div className={isShown ? null : "d-none"}>
                      {/* <Link> */}
                      <p className="first">{item.name}</p>
                      {/* </Link> */}
                    </div>
                  </>
                );
              })}
            {isShown === false && <p className="first">Click the characters</p>}
          </section>
        </div>
      </div>
    </div>
  );
};
export default FilmsDetailCard;
