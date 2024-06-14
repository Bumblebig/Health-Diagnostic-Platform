import Mission from "./components/Mission"
import "./About.scss"
import OurStory from "./components/OurStory"

const About = () => {
  return (
    <div className="about-us">
      <div className="about-us-wrapper">
        <Mission />
        <OurStory />
      </div>
    </div>
  )
}

export default About