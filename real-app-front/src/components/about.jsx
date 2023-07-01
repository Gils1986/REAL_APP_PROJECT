import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        smTitle={`About Us:`}
        title={
          <>
            <i class="bi bi-briefcase-fill"></i> Biz<span className="mx-1">2</span>Biz
          </>
        }
        description="
      We are a leading online platform for exceptional business cards, revolutionizing the way professionals connect in the digital era. With our innovative designs and cutting-edge technology, we empower businesses to make a lasting impression with their online presence. Discover our wide selection of customizable online business cards and elevate your professional image today."
      />
      <div>
        <p>Interface with Ease:</p>
        For regular users, our website provides a user-friendly interface.
         However, for business
        users, we offer a seamless experience. By registering an account, they
        gain exclusive privileges to create, edit, and delete cards
        effortlessly, enabling them to manage their digital business presence
        efficiently. Join us today and unlock the full potential of our
        platform!
      </div>
    </>
  );
};

export default About;
