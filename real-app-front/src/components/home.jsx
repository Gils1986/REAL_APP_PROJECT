import CardsExample from "./cardsExample";
import PageHeader from "./common/pageHeader";
import useMyCards from "../hooks/useMyCards";
import Card from "./card";

const Home = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title={
          <>
            <i className="bi bi-briefcase-fill"></i> Biz
            <span className="mx-1">2</span>Biz
          </>
        }
        description="
        Welcome to our stunning website where you can find incredible online business cards for various businesses. If you're looking for a sophisticated and impressive digital business card for your company, you've come to the right place. We offer a wide range of designs and customization options, allowing you to surprise and enhance your business's presence. With our simple and fast ordering process, you can create a card that perfectly matches your style and purpose. Explore a world of possibilities and receive an online business card that will make a great impression!"
      />

      <div className="row d-flex flex wrap justify-content-around mt-3">
        {!cards.length ? (
          <CardsExample />
        ) : (
          cards.toReversed().map((card, index) => {
            if (index < 4) {
              return <Card key={card._id} card={card} />;
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default Home;
