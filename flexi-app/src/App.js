import React, { Component } from 'react';
import './App.css';
import Flexi from './components/Flexi';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "personsState": 'Tamil Nadu',
			"personName": 'Srinivasan'
    }
    this.flexiConfig = {
      items:[
        {
          "name": "person name",
          "label": "Person's Name",
          "type": "TextField"
        },{
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "values": ["Maharashtra","Kerala","Tamil Nadu"]
        }
      ]
    }
  }
  onFlexiSubmit(event, name, state){
		alert(`Person name is: ${name} from ${state}`);
		event.preventDefault();
	}
  render() {
    return (
      <div className="App">
        <Flexi field={{"personName": this.state.personName, "personsState": this.state.personsState}} submitForm={this.onFlexiSubmit} config={this.flexiConfig}/>
      </div>
    );
  }
}

export default App;
