import React from 'react'; 

class App1 extends React.Component {
   
  constructor() {
    super();  // <-- gives the context to the current class rather than the parent class React.Component

    this.state = { 
      txt : "this is the state text", 
      cat : 0
    }
  }

  update( e ) {
    this.setState({txt : e.target.value})
  }

  render() { 
    return ( 
      <div>
        <h1 className=""> Hello States !!!  </h1>
        <h5>Cat: {this.state.cat} - {this.state.txt}</h5>
      {/*} <input type='text' onChange={this.update.bind(this)}/> */} 
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />

      </div>
    )
  };

}

// stateless Component 
// child component state is updated by the parent component 
const Widget = (props) => <input type='text' onChange={props.update} />

App1.propTypes = {
  txt : React.PropTypes.string, 
  cat : React.PropTypes.number.isRequired
}

App1.defaultProps = {
  txt : "This is the default text",
  cat : 0
}

export default App1;
