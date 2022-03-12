import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
  1- When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component.
	Since Clock needs to display the current time, it initializes this.state with an object including the current time.
	We will later update this state.

	2- React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen.
	React then updates the DOM to match the Clock’s render output.

	3- When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
	Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.

	4- Every second the browser calls the tick() method. Inside it,
	the Clock component schedules a UI update by calling setState() with an object containing the current time.
	Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn 
	what should be on the screen. This time, this.state.date in the render() method will be different,
	and so the render output will include the updated time. React updates the DOM accordingly.

	5- If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method 
	so the timer is stopped.
*/

class Clock extends React.Component {
	// Class components should always call the base constructor with props.
  constructor(props) {
    super(props);
		// le seul endroit ou on peut mettre this.state est dans le constructeur
    this.state = {date: new Date()};
  }

  // These methods are called “lifecycle methods”.

	// We want to set up a timer whenever the Clock is rendered to the DOM for the first time.
	// This is called “mounting” in React.
	componentDidMount() {
		this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // We also want to clear that timer whenever the DOM produced by the Clock is removed.
	// This is called “unmounting” in React.
	componentWillUnmount() {
		clearInterval(this.timerID);
  }

	tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

function Small_Clock() {
  return (
    <div>
			<label>Clock 1 :</label>
      <Clock />
			<label>Clock 2 :</label>
      <Clock />
			<label>Clock 3 :</label>
      <Clock />
    </div>
  );
}
