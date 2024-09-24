import React from 'react';
import { useNavigate } from 'react-router-dom';

const MiComponente = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/user/new'); // Aquí defines la ruta a la que quieres redirigir
  };

  return (
    <div>
      <button onClick={handleClick}>
        Ir a la ruta
      </button>
    </div>
  );
};

export default buttonRegister;