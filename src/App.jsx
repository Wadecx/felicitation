import React, { useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti';  // Importation de la bibliothèque confetti

function App() {
  // Fonction pour générer des confettis dans les coins
  useEffect(() => {
    const corners = [
      { x: 0, y: 0 }, // Coin supérieur gauche
      { x: 1, y: 0 }, // Coin supérieur droit
      { x: 0, y: 1 }, // Coin inférieur gauche
      { x: 1, y: 1 }  // Coin inférieur droit
    ];

    const interval = setInterval(() => {
      // Choisir aléatoirement un coin
      const randomCorner = corners[Math.floor(Math.random() * corners.length)];

      confetti({
        particleCount: 50,
        angle: Math.random() * 360,  // Angles aléatoires
        spread: 70,
        origin: randomCorner,  // Utilisation de l'un des coins définis
        colors: ['#ff5733', '#33ff57', '#3357ff', '#ff33a1']  // Couleurs des confettis
      });
    }, 200);  // Générer des confettis toutes les 200 ms

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="credit">
        <div className="title">
          <h1>POINT DU JURY</h1>
        </div>
        <div className="desc">
          <p>Bon pour un point bonus, Félicitations !</p>
        </div>
      </div>
    </div>
  );
}

export default App;
