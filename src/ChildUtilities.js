import React from 'react';

class ChildUtils extends React.Component { 
	render() {
		return (
			<Parent>
				<div className='childA'></div>
				<div className='childB'></div> 
			</Parent>
		)
	}
}

class Parent extends React.Component {
	render() { 
		let items = React.Children
			.map(this.props.children, child => child)
		
		React.Children
			.forEach(this.props.children, child => console.log(child.props.className))

		let items3 = React.Children.only(this.props.children[0]); 
		
		console.log(items);
		console.log(items3);

		return null 
	}
}

export default ChildUtils;