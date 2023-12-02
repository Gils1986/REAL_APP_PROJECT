import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        img={"/favicon.ico"}
        // smTitle={`About Us:`}
        title={<>The Perfect Gift</>}
        smTitle={<>About Us</>}
      />
      <div>
        'The Perfect Gift' is the leading company in the gift market and has
        been around for over 20 years and provides a comprehensive response to
        all types of events that require a gift. Is anyone celebrating a
        birthday? A gift for the outstanding employee? Anyone just had a baby?
        anniversary? Valentine's Day? A gift for the child's kindergarten
        teacher? Or a holiday gift for the aunt who is hosting? We have
        everything! The site has several categories divided by types of events
        and in each category you will find a variety of gifts in a wide price
        range. How to begin? First of all, register on the site! (Without
        registration you cannot enter the different categories and order a cool
        gift), after you have registered you can start checking all the options
        we offer, of course you can combine several gifts (!) and we will make
        sure to pack them together in a cool package.
      </div>
    </>
  );
};

export default About;
