import React from 'react'; 

const HOC = (InnerComponent) => class xyz extends React.Component { 
	constructor() {
		super(); 
		this.state = {count : 0}
	}

	update() {
		this.setState({count : this.state.count + 1})
	}

	componentWillMount() {
		console.log("HOC Will Mount");
	}

	render() {
		console.log({...this.props});

		return (
			<InnerComponent
				{...this.props}
				{...this.state}
				update={this.update.bind(this)}
			/>
		)
	}
}

class HOCApp extends React.Component { 
	render() {
		return (
			<div>
				<h1>Higher Order Component!!!</h1>
				<Button> Button </Button>
				<hr/>
				<LabelHOC> label </LabelHOC>

			</div>
		);
	}

}

const Button = HOC(
 		(props) => <button onClick={props.update}>{props.children} - {props.count}</button>
	 ) 

class Label extends React.Component { 

	componentWillMount() {
		console.log("label will mount");
	}

	render() {
		return ( 
			<label onMouseMove={this.props.update}>
			{this.props.children} - {this.props.count}
			</label>
		);
	}
}

const LabelHOC = HOC(Label)

export default HOCApp