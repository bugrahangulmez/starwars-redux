import { useSelector } from "react-redux";
import {
  FilmsDetailCard,
  PeopleDetailCard,
  PlanetsDetailCard,
  ShipDetailCard,
  SpeciesDetailCard,
} from "../../components/index";

const Detail = () => {
  const { group } = useSelector((store) => store.swapi);
  const {
    cardDetail: { detail },
  } = useSelector((store) => store.detail);
  // console.log(group);
  return (
    <div id="detail">
      {group === "starships" || group === "vehicles" ? (
        <ShipDetailCard detail={detail} />
      ) : group === "species" ? (
        <SpeciesDetailCard detail={detail} />
      ) : group === "planets" ? (
        <PlanetsDetailCard detail={detail} />
      ) : group === "people" ? (
        <PeopleDetailCard detail={detail} />
      ) : group === "films" ? (
        <FilmsDetailCard detail={detail} />
      ) : null}
    </div>
  );
};
export default Detail;
