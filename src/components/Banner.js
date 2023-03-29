import React from "react";

const Banner = () => {
    return (
        <section id="banner" className="clearfix">
    <div id="banner_content_wrapper">
      <div id="poster">
        <img
          src="https://res.cloudinary.com/dw369yzsh/image/upload/v1470917169/deadpool_wn1hwe.jpg"
          alt="Deadpool Movie Poster"
          className="featured_image"/>
      </div>
      <div id="content">
        <h2 className="title">Philippe Plante</h2>
        <div className="ratings">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star inactive" />
        </div>
        <p className="description">
          Ce projet a été réalisé dans un but d'apprentissage afin de collaborer et de participer à la réalisation d'un site web qui implique des compétences en programmation, en intégration et design Web.
        </p>
        <p className="info">
          Ce projet m'a pris <span>|</span> 15600 min <span>|</span> Programmation en React de la matrice <span>|</span> Advil à l'intégration <span>|</span> Comédie d'erreurs {" "}
          <span>|</span> 30 mars 2023
        </p>
      </div>
    </div>
  </section>
    )
}

export default Banner;
