import React from "react";
import CardsExample from "./cardsExample";
import PageHeader from "./common/pageHeader";
import useMyCards from "../hooks/useMyCards";
import Card from "./card";
import { useAuth } from "../context/auth.context";
import Event from "./event";

const Home = () => {
  const cards = useMyCards();
  const { user } = useAuth();

  const description =
    "'The Perfect Gift' is a site that offers gifts for any occasion and for any purpose, Birthday? Toast? Holiday? Birth? Or just to make someone smile.... that's what we're for!\nRegister on the site to enjoy the variety of offers and promotions we offer. More details about the site can be found on the About page.";

  const formattedDescription = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <>
      <PageHeader
        img={"/favicon.ico"}
        title={<>The Perfect Gift</>}
        description={formattedDescription}
        smTitle={"Gifts by occasion"}
        secondDis={
          "We have created for you types of gifts and vouchers according to the type of event."
        }
      />
      <div className="container">
        <div className="row">
          <Event
            img={
              "https://cdn.pixabay.com/photo/2017/08/29/11/05/birthday-2692889_640.png"
            }
            alt={"gift"}
            description={"Birthdays"}
          />
          <Event
            img={
              "https://cdn.pixabay.com/photo/2022/12/13/10/42/stork-7653116_640.png"
            }
            alt={"gift"}
            description={"Birth"}
          />
          <Event
            img={
              "https://cdn.pixabay.com/photo/2021/01/27/08/42/valentine-5954177_640.jpg"
            }
            alt={"gift"}
            description={"Valentine's day"}
          />
          <Event
            img={
              "https://cdn.pixabay.com/photo/2018/02/23/11/38/bouquet-3175315_640.jpg"
            }
            alt={"flowers"}
            description={"Flowers"}
          />
        </div>
      </div>

      {/* <div className="row d-flex flex wrap justify-content-around mt-3">
        {!user || (user && !user.biz) || (user.biz && cards.length === 0) ? (
          <CardsExample />
        ) : (
          cards.toReversed().map((card, index) => {
            if (index < 4) {
              return <Card key={card._id} card={card} />;
            }
            return null;
          })
        )}
      </div> */}
    </>
  );
};

export default Home;
