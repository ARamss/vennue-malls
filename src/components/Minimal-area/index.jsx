/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Fácil, rápido y seguro.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Sin necesidad de descargar aplicaciones les damos acceso directo a tus visitates a tu mapa interactivo.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Fácil
                  </h6>
                  <p>
                    Escanea el QR, accede al link y estas listo para navegar.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Rápido
                  </h6>
                  <p>
                    No es necesario descargar ninguna aplicacion, con el buscador de tu celular podrás usar la experiencia Vennue.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Seguro
                  </h6>
                  <p>
                    Mantenemos la privacidad y seguridad de tus visitantes dentro de nuestros protocolos de seguridad.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
