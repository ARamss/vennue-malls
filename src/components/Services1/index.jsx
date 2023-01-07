import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Nuestras
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Soluciones.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          >
            <h4 className="custom-font">
              La Mejor <br /> Experiencia Indoor
            </h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Conócenos</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-map-2"></span>
            <h6>Vennue Maps</h6>
            <p>
              Mapeamos tu centro comercial y generamos un ambiente de códigos QR.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-speaker"></span>
            <h6>Vennue Ads</h6>
            <p>Nos aliamos contigo para que tus locatarios y otros anunciantes puedan tener precencia en el mapa digital.</p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-display1"></span>
            <h6>Vennue Analytics</h6>
            <p>Analiza tu audiencia y toma las mejores decisiones para mejorar la experiencia de los visitantes y locatarios.</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
