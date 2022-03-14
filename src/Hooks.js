import React, { useState, useEffect } from "react";

/*
Les Hooks sont des fonctions qui permettent de « se brancher » sur la gestion d’état local
et de cycle de vie de React depuis des fonctions composants. Les Hooks ne fonctionnent pas dans des classes :
ils vous permettent d’utiliser React sans classes.
*/

/*
dans ton fichier hooks, les fonctions et/ou variables que tu veux exporter doivent avoir le mot clef "export" devant.
Il peut juste avoir un default. genre si dans le fichier hooks tu as
export const fonction2 = ...; export default const fonction1 = ...;
ton import dans un autre fichier ressemblerait a
import fonction1, {fonction2} from './Hooks';
*/
export default function Hooks(props) {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // « déstructuration positionnelle » la maniere de nommé la variable et sa modification []
  const [count, setCount] = useState(0);
  const [old_count, setOldCount] = useState(0);

  // Que renvoie useState ? Elle renvoie une paire de valeurs : l’état actuel et une fonction pour le modifier

  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banane');
  const [todos, setTodos] = useState({ text: 'Hooks' });
  // Je ne sais pas comment afficher via le DOM

  localStorage.setItem('information', JSON.stringify(todos)); // On l'affichage dans le localstorage

	// Équivalent à componentDidMount plus componentDidUpdate :
	// On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage
  useEffect(() => {
    // Mettre à jour le titre du document en utilisant l'API du navigateur, lorsqu'il y a un changement sur la variable
    document.title = `Vous avez cliqué ${count} fois`;
    localStorage.setItem('count', JSON.stringify(count));
    // mettre cette condition ici eviter une répétition du alert 2 fois pour des raisons X
    if (count == 5){
      alert(count);
    }

    if (localStorage.getItem('count') == 2){
      alert("oh oh");
    }
    console.log(count);
    //console.log(Information());
  });

  //setOldCount(count);

  // Capture de l'éventement lorsque je clique sur le bouton
  const handleCountChange = (event) => {
    // ce deux console log ne fait pas le résultat escompté, le résultat sera affiché à la fin du useEffect
    //console.log(count);
    setCount(count + 1);
    //console.log(count);
  }

	// Information est comme une fonction
  var Information = () => {
    return localStorage.getItem('count');
  };

  return (
    <div>
      <p className="Comptage">Vous avez cliqué {count} fois, l'information se trouvant dans localstorage est : {count}</p>
      <p>Mon age : {age}, j'aime les {fruit} !</p>
        <button onClick={handleCountChange}>
	        --- Cliquez ici ---
	      </button>
    </div>
  );
}