// src/App.js
import React, { useState, useEffect } from 'react';
import PortfolioList from './components/PortfolioList';
import AddPortfolio from './components/AddPortfolio';
import { getPortfolios } from './services/portfolioService';
import './App.css'; // Importamos estilos CSS personalizados

import contentBackgroundImg from './images/contentBackground.jpg'; // Importamos la imagen de fondo de la sección de contenido
import headerBackgroundImg from './images/background.jpg'; // Importamos la imagen de fondo del encabezado



function App() {
  const [portfolios, setPortfolios] = useState([]);

  const fetchPortfolios = async () => {
    const data = await getPortfolios();
    setPortfolios(data);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleAddPortfolio = (portfolio) => {
    setPortfolios([...portfolios, portfolio]);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${headerBackgroundImg})` }}>
        <h1 className="title">¡Bienvenido a ¡PORTA YA !</h1>
        <p className="subtitle">¡ Hola dejanos tu portafolio aquí abajo, ¡Nos pondremos en contacto Pronto!</p>
      </header>
      <div className="App-content" style={{ backgroundImage: `url(${contentBackgroundImg})` }}>
        <AddPortfolio onAdd={handleAddPortfolio} />
        <PortfolioList portfolios={portfolios} />
      </div>
    </div>
  );
}

export default App;
