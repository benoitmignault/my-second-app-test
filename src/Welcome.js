import React, {Component} from 'react';

// export default -> est très important devant la classe ou la function
export default class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}