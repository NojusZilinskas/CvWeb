import { useState } from "react";

function DarbuSarasas() {
  const [portfolio] = useState({
    pavadinimas: "1 darbas: Portfolio svetainė",
    nuotrauka: "https://essential-addons.com/wp-content/uploads/2023/12/image-2.jpeg",
    aprasymas: "Mano sukurta portfolio svetaine, naudotos ivairios technologijos",
    nuorodos: {
      svetainė: "https://example.com",
      git: "https://github.com/example/portfolio"
    }
  });

  return (
    <div className="darbukai">
      <h1 className="portfolio">{portfolio.pavadinimas}</h1>
      <img src={portfolio.nuotrauka} alt={portfolio.pavadinimas} className="nuotraukadarb" />
      <p className="parag">{portfolio.aprasymas}</p>
      <a href={portfolio.nuorodos.svetainė} className="nuor" target="_blank" rel="noopener noreferrer">
        Svetainė
      </a>
      <a href={portfolio.nuorodos.git} target="_blank" className="nuorr" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
}

export default DarbuSarasas;