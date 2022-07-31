import reactlogo from "../assets/img/reactlogo.svg";
import mongologo from "../assets/img/mongodblogo.svg";
import firebaselogo from "../assets/img/firebaselogo.svg";
import nodejslogo from "../assets/img/nodejs-icon.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am a very ambitious full stack developer looking for a role in
            an established company. My ability to understand complex ideas/technology, and implement them through a user-friendly interface will make me an asset to your team.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactlogo} alt="reactlogo" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={mongologo} alt="mongologo" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={firebaselogo} alt="firebaselogo" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={nodejslogo} alt="nodejslogo" />
                                <h5>Node.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="colorshpimg" />
    </section>
  )
}