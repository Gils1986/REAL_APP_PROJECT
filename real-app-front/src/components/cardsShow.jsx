import { useParams } from "react-router-dom";
import useCard from "../hooks/useCard";
import Card from "./card";
import PageHeader from "./common/pageHeader";

const CardsShow = () => {
  const { id } = useParams();
  const card = useCard(id);
  return (
    <>
      <PageHeader
        title={
          <>
            Real<i className="bi bi-clipboard2-data"></i>App
          </>
        }
        description="Some real text over here"
      />

      {card && <Card card={card} />}
    </>
  );
};

export default CardsShow;
