import React from 'react'; 
import ReactDOM from 'react-dom';

class LifeCycle2 extends React.Component { 
	constructor() { 
		super(); 
		this.state = {increasing : false}
	}

	update() { 
		ReactDOM.render(
			<LifeCycle2 val={this.props.val + 1} />, 
			document.getElementById('lifecycle2') 
		)
	}

	componentWillReceiveProps(nextProps) { 
		console.log("componentWillReceiveProps");
		console.log("called when new set of props is coming in to the component.");

		this.setState({ increasing : nextProps.val > this.props.val })
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('current state', this.state);
		console.log('next state', nextState);

		console.log('current props', this.props);
		console.log('next props', nextProps); 
		// only prevents the re-render, the props and states will still update 
		console.log('shouldComponentUpdate');
		console.log('this is called when a new set of props or state is received by the component.');
		console.log('decides whether the component should be updated or not on the boolean condition.');
		console.log('technically determines whether render should be called or not. Doesnt prevent the state/props to be updated.');

		return nextProps.val % 5 === 0;
	}

	componentDidUpdate(prevProps, prevState) { 
		console.log(`prevProps: ${prevProps.val}`);
	}

	render() { 
		console.log('render called');
		console.log(this.state.increasing);

		return(
			<div>
			<h1>Updating LifeCycle Components !!</h1>
			<button onClick={this.update.bind(this)}>
				{this.props.val}
			</button>
			</div>
		)
	}

}

LifeCycle2.defaultProps = {val : 0}

export default LifeCycle2