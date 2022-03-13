import React, { useState, useEffect } from "react";

/*
Les Hooks sont des fonctions qui permettent de « se brancher » sur la gestion d’état local
et de cycle de vie de React depuis des fonctions composants. Les Hooks ne fonctionnent pas dans des classes :
ils vous permettent d’utiliser React sans classes.
*/

export default function Hooks() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);

	// Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    // Mettre à jour le titre du document en utilisant l'API du navigateur, lorsqu'il y a un changement sur la variable
    document.title = `Vous avez cliqué ${count} fois`;
    localStorage.setItem('count', JSON.stringify(count));
  });

  if (count == 5){
    alert(count);
  }

  return (
    <div>
      <p className="Comptage">Vous avez cliqué {count} fois</p>
	      <button onClick={() => setCount(count + 1)}>
	        Cliquez ici
	      </button>
    </div>
  );
}