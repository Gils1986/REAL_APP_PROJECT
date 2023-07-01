import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";
import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";

const MyCards = () => {
  const cards = useMyCards();
  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />
      <div className="row" style={{ width: "150px" }}>
        <Link className="btn btn-success btn-sm " to="/create-card">
          Create a New Card
        </Link>
      </div>
      <div className="row">
        {!cards.length ? (
          <p className="mt-4">
            Hello, Since you have not yet created business cards, the above page
            is empty. Click the button "Create a new card" and let's start
            filling out your business cards!
          </p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
