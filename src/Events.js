import React from 'react'; 

class Events extends React.Component { 
	constructor() { 
		super(); 
		this.update = this.update.bind(this);

		this.state = { 
			'currentEvent' : '----'
		}
	}

	update( e ) {  
		this.setState({'currentEvent': e.type }) 
	}

	render() { 
		return ( 
			<div>
				<h1> Synthetic Events</h1>
				<h4>Event Occurred : {this.state.currentEvent}</h4>

				<textarea
					onKeyPress={this.update}
					onBlur={this.update}
					onFocus={this.update}  
					onClick={this.update}
					onDoubleClick={this.update}
					onMouseOver={this.update}
					onMouseDown={this.update}
					onCopy={this.update}
					onCut={this.update}
					onPaste={this.update}
					onTouchStart={this.update}
					onTouchMove={this.update}
					onTouchEnd={this.update}
				 />
 			</div> 

			)
	}
}

export default Events
