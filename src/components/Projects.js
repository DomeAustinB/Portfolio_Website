import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "The Admin Group",
      description: "The social media app that helps you find new places to eat, go out, and enjoy life! All recommendations are based on a network of your friends and mutual friends' 'likes'.",
      imgUrl: projImg1,
    },
    {
      title: "The Admin Group",
      description: "The social media app that helps you find new places to eat, go out, and enjoy life! All recommendations are based on a network of your friends and mutual friends' 'likes'.",
      imgUrl: projImg2,
    },
    {
      title: "The Admin Group",
      description: "The social media app that helps you find new places to eat, go out, and enjoy life! All recommendations are based on a network of your friends and mutual friends' 'likes'.",
      imgUrl: projImg3,
    },
  ];

  const projctS = [
    {
        title: "pocketAI",
        description: "The mission of pocketAI is to take the complex world of Artificial Intelligence and simplify it into a user-friendly interface. This app levels the playing field, giving people with no coding background all the bennifits of A.I.",
        imgUrl: projImg4
    },
    {
        title: "pocketAI",
        description: "The mission of pocketAI is to take the complex world of Artificial Intelligence and simplify it into a user-friendly interface. This app levels the playing field, giving people with no coding background all the bennifits of A.I.",
        imgUrl: projImg5,
    },
    {
        title: "pocketAI",
        description: "The mission of pocketAI is to take the complex world of Artificial Intelligence and simplify it into a user-friendly interface. This app levels the playing field, giving people with no coding background all the bennifits of A.I.",
        imgUrl: projImg6,
    },
  ]

  const projs = [
    {
      title: "C.A.T.",
      description: "Fashion company ERP/CRM",
      imgUrl: projImg7
  },
  {
      title: "C.A.T.",
      description: "Fashion company ERP/CRM",
      imgUrl: projImg8,
  },
  {
      title: "C.A.T.",
      description: "Fashion company ERP/CRM",
      imgUrl: projImg9,
  },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">The Admin Group</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">pocketAI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">C.A.T.</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projctS.map((projctS, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projctS}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projs.map((projs, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projs}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}