import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExploreBanner.css";

export function ExploreBanner() {
  return (
    <section className="explore-banner d-flex align-items-stretch">
      <div className="container-fluid">
        <div className="row h-100 justify-content-end">
          {/* Coluna esquerda vazia: a imagem de fundo já mostra o produto */}
          <div className="col-12 col-md-6 col-lg-7" />
          <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center py-5">
            <div className="explore-banner__text">
              <h1 className="explore-banner__title">
                Descubra
                <br />
                novas delícias
              </h1>
              <p className="explore-banner__subtitle mt-3 mb-0">
                Explore sabores que só encontra na Aroma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

