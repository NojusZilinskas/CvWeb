import { useState } from "react";
// import PropTypes from 'prop-types';


const Avataras = () => {
  const [img, setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png");

  return (
    <div><img className="avat" src={img} /></div>
  );
};

Avataras.propTypes = {
};

export default Avataras;