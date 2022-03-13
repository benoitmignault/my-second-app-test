import React, {Component} from 'react';

export default class FirstComponent extends Component {

	constructor(props) {
		super(props)
	}

/*
render(): The return value of this function is rendered ( displayed ) on the screen
*/
	render() {
	// Creates a div element and assigns it to a constant called element
    const element = (<div>Text from Element</div>)
    // la parathèse après le return est EXTREMENT IMPORTANT
    return (
	    <div className="comptext">
	         <h3>First Component</h3>
	             {this.props.displaytext}
	             {element}
	    </div>
    );
	}
}