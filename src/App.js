import React from 'react'; 

/// stateelss function component
// const App = () => <h1>Hello React !! Whatsup ?</h1>;

// props dont change after component is loaded.

class App extends React.Component { 
  render() {
    let cat = this.props.cat;

    // another way 
    // return React.createElement('h1', null, 'Hello World!!');
    return ( 
      <div>
        <h1 className=""> Hello Props !!!  </h1>
        <h4>{this.props.txt}</h4>
        <h5>Cat : {cat}</h5>
        <b>Bold</b>
      </div>
    )
  };
 
}


// defining prop types 
App.propTypes = {
  txt : React.PropTypes.string, 
  cat : React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt : "This is the default text",
  cat : 0
}

export default App;
