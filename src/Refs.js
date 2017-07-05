import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component { 
	constructor() {
		super(); 
		this.update = this.update.bind(this);
		this.state = {
			'a' : '',
			'b' : ''
		}
	}

	update() { 
		this.setState({ 
			a : ReactDOM.findDOMNode(this.a).value,
			b : this.refs.b.value, 
			c : this.c.value, 
			d : this.d.refs.input.value

		})
	}

	render() {
		return ( 
			<div> 
				<h1>Hello Refs !! </h1>

				a <Input ref={component => this.a = component } 
					update={this.update} /> {this.state.a}

				<br/> <br/>

				b <input ref='b' 
					type="text" onChange={this.update} /> {this.state.b}

				<br/> <br/>

				{/* callback passing style to ref */}
				c <input ref={ node => this.c = node}
					type='text' onChange={this.update} /> {this.state.c}
				
 				<br/><br/>

				d <DivInput ref={component => this.d = component } 
					update={this.update} /> {this.state.d}

				<br/> <br/>

			</div>
		)
	}
}

class Input extends React.Component { 
	render() {
		return (
			<input type='text' 
			onChange={this.props.update} />
		)

	}
}

class DivInput extends React.Component { 
	render() {
		return (
			<div>
			<input ref='input' type='text' 
			onChange={this.props.update} />
			</div>
		)

	}
}

export default Refs