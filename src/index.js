// import React from 'react';
// import ReactDOM from 'react-dom';

var React = require('react');
var ReactDOM = require('react-dom');

import App from './App';
import App1 from './App1';
import App2 from './App2';
import Events from './Events';
import Refs  from './Refs';
import Wrapper from './LifeCycle'; 
import LifeCycle2 from './LifeCycle2';
import DataSet from './DataSet'; 
import HOCApp from './HigherOrderComponents';
import BabelParser from './BabelParser';
import ChildUtils from './ChildUtilities';
import CloneChildren from './CloneChildren';
import SliderApp from './ReusableComp';

ReactDOM.render(
  <App cat={5} txt='this is a prop text'/>,
  document.getElementById('root')
);


ReactDOM.render(
  <App1 cat={5} txt='this is a prop text'/>,
  document.getElementById('bhoot')
);


ReactDOM.render(
  <App2/>,
  document.getElementById('widget')
);

ReactDOM.render(
	<Events/>,
	document.getElementById('events')
);

ReactDOM.render(
	<Refs/>,
	document.getElementById('refs')
);	

ReactDOM.render(
	<Wrapper/>, 
	document.getElementById('lifecycle')
);

ReactDOM.render( 
	<LifeCycle2/>,
	document.getElementById('lifecycle2')
);

ReactDOM.render( 
	<DataSet/>, 
	document.getElementById('dataset')
);

ReactDOM.render(
	<HOCApp/>, 
	document.getElementById('hoc')
)


ReactDOM.render( 
	<BabelParser/>,
	document.getElementById('babel-parser')
)

ReactDOM.render(
	<ChildUtils/>, 
	document.getElementById('child-render')

)


ReactDOM.render(
	<CloneChildren/>, 
	document.getElementById('child-clone')

)

ReactDOM.render(
	<SliderApp/>, 
	document.getElementById('slider')
)