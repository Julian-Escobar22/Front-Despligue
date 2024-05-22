// src/components/PortfolioList.js
import React, { useEffect, useState } from 'react';
import { getPortfolios } from '../services/portfolioService';
import './PortfolioList.css'; // Importamos los estilos CSS
import { useSpring, animated } from '@react-spring/web';

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      const data = await getPortfolios();
      setPortfolios(data);
    };

    fetchPortfolios();
  }, []);

  return (
    <div className="portfolio-list">
      <h2>Portfolios</h2>
      <ul>
        {portfolios.map((portfolio, index) => (
          <PortfolioItem key={portfolio._id} portfolio={portfolio} index={index} />
        ))}
      </ul>
    </div>
  );
};

const PortfolioItem = ({ portfolio, index }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: index * 200,
  });

  return (
    <animated.li style={props}>
      <h3>{portfolio.title}</h3>
      <p>{portfolio.description}</p>
      <a href={portfolio.link} target="_blank" rel="noopener noreferrer">View</a>
    </animated.li>
  );
};

export default PortfolioList;
