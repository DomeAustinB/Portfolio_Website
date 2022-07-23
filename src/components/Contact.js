import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/qrcode.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'service_63mvqwt',
      'template_9sc2k9q',
      form.current,
        'hAzXX3jRXiLWQrjjU'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


  return (
    <>
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
            <h1>Scan for Contact Info</h1>
          </Col>
          <Col size={12} md={6}>
            
                <div className={"animate__animated animate__fadeIn"}>
                <h2>Let's Connect</h2>
            
                <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input placeholder="First Name" type="text" name="firstName" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input placeholder="Last Name" type="text" name="lastName" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input placeholder="Email Address" type="email" name="email" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input placeholder="Phone No." type="tel" name="phone" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="5" placeholder="Message" name="message" required ></textarea>
                    </Col>
                    
                    
                    
                  </Row>
                  <Col size={12} className="px-1" >
                  <input type="submit" className="flat-button" value="Send" />
                  </Col>
                </form>
                
              </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  )
}

export default Contact