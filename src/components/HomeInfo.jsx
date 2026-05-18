import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Bonjour, je suis
        <span className="font-semibold mx-2 text-white">ONOBIONO ELOGO Dave Yohan</span>
        👋
        <br />Développeur logiciel — Backend & Full‑Stack
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Formation en génie logiciel et expérience sur des projets backend
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          En savoir plus
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Projets full‑stack, APIs et systèmes de gestion — curieux d'en voir
          plus ?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Voir mes projets
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Besoin d'un développeur ou d'une API robuste ? <br /> Contactez‑moi
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Entrer en contact
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
