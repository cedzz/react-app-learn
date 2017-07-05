import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component { 
	constructor() {
		super() ; 
		this.update = this.update.bind(this);
		this.state = {val : 0};
	}

	update() { 
		this.setState({val : this.state.val+ 1 })
	}

	componentWillMount() {
		console.log("componentWillMount");
		console.log("have access to state and props");
		this.setState({m : 2});
	}

	componentDidMount() {
		console.log("componentDidMount");
		console.log("have access to component in the DOM");
		console.log(ReactDOM.findDOMNode(this));
		this.inc = setInterval(this.update, 500);

	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
		clearInterval(this.inc);
	}

	render() {
		console.log('rendered');
		
		return (
			<div>
				<button onClick={this.update}>{this.state.val * this.state.m}</button> 

			</div> 	
		)
	}
}

class Wrapper extends React.Component { 
	constructor() { 
		super() ;
		this.mount = this.mount.bind(this);
		this.unmount = this.unmount.bind(this);
	}	

	mount() {
		ReactDOM.render(<LifeCycle/>, document.getElementById('app'))
	}
 
	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('app')) 
	}

	render() {
		return (
			<div>
			<h1>Life Cycle Components !!</h1>

			<button onClick={this.mount}>Mount</button>
			<button onClick={this.unmount}>Unmount</button>
			<div id='app'></div>
			</div> 
		)
	}
}


export default Wrapper;