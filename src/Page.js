import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
Empêcher l’affichage d’un composant
Dans de rares cas, vous voudrez peut-être qu’un composant se masque
alors même qu’il figure dans le rendu d’un autre composant. Pour ce faire,
il suffit de renvoyer null au lieu de son affichage habituel.

Dans l’exemple ci-dessous, <WarningBanner /> s’affichera en fonction de la valeur de la prop warn
*/

/*
Renvoyer null depuis la méthode render d’un composant n’affecte pas l’appel
aux méthodes du cycle de vie du composant.
Par exemple, componentDidUpdate sera quand même appelée.
*/

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Attention !
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Masquer' : 'Afficher'}
        </button>
      </div>
    );
  }
}
