import React from "react";
import addParlx from "../../common/addParlx";

const ContactHeader = ({ sliderRef }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx()
    }
  }, [pageLoaded])
  return (
    <header ref={sliderRef} className="works-header fixed-slider hfixd valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 static">
            <div className="capt mt-50">
              <div className="parlx">
                <h2 className="custom-font">
                  <span>Contacto</span>Platiquemos sobre como digitalizarte.
                </h2>
                <p>
                  Agenda un meet o llamada con nosotros y nos pondremos en contacto contigo.
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">Contacto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
