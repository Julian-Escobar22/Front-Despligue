import React, { useState } from 'react';
import { createPortfolio } from '../services/portfolioService';
import './AddPortfolio.css'; // Importamos los estilos CSS

const AddPortfolio = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPortfolio = { title, description, link };
    const savedPortfolio = await createPortfolio(newPortfolio);
    onAdd(savedPortfolio);
    setTitle('');
    setDescription('');
    setLink('');
  };

  return (
    <form className="add-portfolio-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Nombre:</label>
        <input className="form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">descripción:</label>
        <textarea className="form-textarea" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Link:</label>
        <input className="form-input" type="text" value={link} onChange={(e) => setLink(e.target.value)} required />
      </div>
      <button className="form-button" type="submit">Añadir Portfolio</button>
    </form>
  );
};

export default AddPortfolio;
