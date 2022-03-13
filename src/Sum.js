import React, {Component} from 'react';

// Il est important d'avoir une déclaration de la function pour la reprendre pour les tests
// module.exports = sum;// En commentaire pour exclure des tests

// Only one default export allowed per module
export default function sum(a, b) {
  return a + b;
}
