import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectionButton = ({ ruta, texto }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ruta);
  };

  return (
    <button onClick={handleClick}>
      {texto}
    </button>
  );
};

export default RedirectionButton;
