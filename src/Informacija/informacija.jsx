import { useState } from "react";
// import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Avataras from "./Avataras";
import InfoApie from "./InfoApie";

const Informacija = () => {
  const [infoSarasas, setInfoSarasas] = useState([
    {pavadinimas: "Gimimo data", reiksme: "2000 01 01"},
    {pavadinimas: "Išsilavinimas", reiksme: "programuotojas"},
    {pavadinimas: "Hobis", reiksme: "žvejyba"},
    {pavadinimas: "Mėgstamiausias žaidimas", reiksme: "pokemonai"},
  ]);

  return (
    <header>
      <h1>Vardenis Pavardenis</h1>
      
      <Avataras></Avataras>

      <InfoApie pavadinimas="Apie mane" sarasas={infoSarasas}></InfoApie>

      <h3>Kontaktai</h3>
      <div><img src="https://img.icons8.com/?size=100&id=CCDYqb5KK5vI&format=png&color=000000" /> +370600000001</div>
      <div><img src="https://img.icons8.com/?size=100&id=108813&format=png&color=000000" /><a  className="soc" href="mailto:vardenis@gmail.com">vardenis@gmail.com</a></div>
      
      <div>
        <h5>Socialiniai tinklai</h5>
        <a href="https:youtube.com" ><h3>Youtube</h3><img src="https://img.icons8.com/?size=100&id=cs0F7pb81QnM&format=png&color=000000"/></a>
        <a href="https:youtube.com" ><img src="https://img.icons8.com/?size=100&id=cs0F7pb81QnM&format=png&color=000000"/></a>
        <a href="https:youtube.com" ><img src="https://img.icons8.com/?size=100&id=cs0F7pb81QnM&format=png&color=000000"/></a>
      </div>

    </header>
  );
};

Informacija.propTypes = {
};

export default Informacija;