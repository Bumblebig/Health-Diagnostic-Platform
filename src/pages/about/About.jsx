import Mission from "./components/Mission";
import "./About.scss";
import OurStory from "./components/OurStory";
import ContactLink from "./components/ContactLink";
import FAQs from "./components/FAQ/Faq";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-us-wrapper">
        <Mission />
        <OurStory />
        <div className="faqs  w-full flex justify-center flex-col align-middle">
          <h1 className="text-3xl text-primary font-semibold text-center">Frequently Asked Questions</h1>
          <FAQs />
        </div>
        <ContactLink />
      </div>
    </div>
  );
};

export default About;
