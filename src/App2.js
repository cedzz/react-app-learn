import React from 'react'; 

class App2 extends React.Component { 
	render() { 
		return (
			<div>
	 		<h1> Accessing Child properties !!! </h1> 
			<Title text="the Title" />
			<Button>I <Heart/> <b>React</b></Button>
			</div>
		)
	}
}  

// IN order to use nested values of a Component in another 
// component use props.children
class Button extends React.Component { 
	render() {
		return (
			<button>{this.props.children}</button>
		)
	}
}

class Heart extends React.Component { 
	render() {
		return ( 
			<span>&hearts;</span> 
		)
	}
}

const Title = (props) => <h3>Title: {props.text} </h3>

/// Built-in validation
// Title.propTypes = { 
// 	text : React.PropTypes.string.isRequired
// }

// Custom Validation 
Title.propTypes = { 
	text(props, propName, component) { 
		if(!(propName in props)) { 
			return new Error(`missing ${propName}`); 
		}
		if(props[propName].length < 6) { 
			return new Error(`${propName} name is too short`);
		}
	}
}


export default App2