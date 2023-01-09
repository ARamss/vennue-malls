import React from "react";
import axios from 'axios';
import Split from '../Split';
import HubspotForm from 'react-hubspot-form'

const ContactWithMap = ({ theme = "dark" }) => {  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Compartenos tus datos.</h4>
                    <form id="contact-form">
                      <HubspotForm
                          portalId='23136526'
                          formId='8ce41ca0-6a9e-4bd9-8a27-111abe9285d3'
                          onSubmit={() => console.log('Submit!')}
                          onReady={(form) => console.log('Form ready!')}
                          loading={<div>Loading...</div>}
                      />
                    </form>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
{/*                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">Email@example.com</a>
                  </h5>
                  <h5>+4.930.705.5448</h5>
                </div>*/}
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visitanos.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                    Alica 49, Lomas de Chapultepec,
                    <br />
                    CDMX, México
                  </h6>
                </div>
                <div className="social mt-50">
                <a href="https://www.instagram.com/vennue.official/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/vennue/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/vennue.official">
                  <i className="fab fa-facebook-f"></i>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7261799143225!2d-99.20541828489083!3d19.424233445980988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f0d32a134d%3A0xdd8ab85151b4712!2sAlica%2049%2C%20Lomas%20-%20Virreyes%2C%20Molino%20del%20Rey%2C%20Miguel%20Hidalgo%2C%2011040%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1673288787996!5m2!1sen!2smx"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
          <p>
            © 2022, Indoors By Vennue. Is a <a href="#0">Quopard LLC</a> platform.
          </p>
          </div>
        </div>
      </footer>
    </>
  );
};


export default ContactWithMap;
