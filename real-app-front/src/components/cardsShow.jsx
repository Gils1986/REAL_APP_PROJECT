import { useParams } from "react-router-dom";
import useCard from "../hooks/useCard";
import Card from "./card";
import PageHeader from "./common/pageHeader";

const CardsShow = () => {
  const { id } = useParams();
  const card = useCard(id);

  if (!card) {
    return <p>Loading...</p>;
  }
  
  return (
    <>
      <PageHeader
        title={
          <>
            <p>Card ID: {card._id}</p>
          </>
        }
        description={card.bizName}
      />

      {card && (
        <>
          <p>Card ID: {card._id}</p>
          <p>Business Name: {card.bizName}</p>
          <p>Business Description: {card.bizDescription}</p>
          <p>Business Phone: {card.bizPhone}</p>
          <p>Business Address: {card.bizAddress}</p>
          <Card card={card} />
        </>
      )}
    </>
  );
};

export default CardsShow;
