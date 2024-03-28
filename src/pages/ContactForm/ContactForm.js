import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer.js"


function ContactForm() { const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_m63c8ba", "template_c1ox1hf", form.current, {
          publicKey: "psJ1UtSutlIleSF5p",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setIsSubmitted(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };

  return (
        <div className="container contact-form-container d-flex flex-row justify-contect-center" id="contact-container">
          {isSubmitted ? (
            <div className="success-message">
              <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
              <p>Message sent successfully!</p>
            </div>
          ) : (
            <form
              className="contact-form"
              id="contact-form-id"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="contact-label"
                type="text"
                name="user_name"
                placeholder="Nimi:"
                required
              />
              <input
                className="contact-label"
                type="email"
                name="user_email"
                placeholder="Sähköposti:"
                required
              />
    
              <textarea name="message" placeholder="Viesti:" required />
              <button type="submit" className="send-button">Lähetä</button> 
            </form>
     )}
     <div className=" quick-contact">
                <div className="row">
                  <ul className="contact-list-ul">
                    <li className="contact-list-ul">
                    <i className="bi bi-telephone"> (+358) 45 6122540</i>
                    </li>
                    <li className="contact-list-ul">
                    <i className="bi bi-envelope"> softakoppi@gmail.com</i>
                    </li>
                    <li className="contact-list-ul">
                    <i className="bi bi-geo-alt">Helsinki</i>
                    </li>
                    <a href="https://www.linkedin.com/in/eetu-huttula-3a2714244/" target="blank" alt="linkedin-Eetu-Huttula" className="link-ul"><i className="bi bi-linkedin"></i></a>
                    <a href="https://eetuhuttula.github.io/EetuHcv/" target="blank" alt="Web-resume" className="link-ul"><i className="bi bi-link-45deg"></i></a>
                  </ul>
                </div>
              </div>
              <div className="footer-container">
                <Footer/>
              </div>
              
     </div>
     
   );
 };
   
export default ContactForm;