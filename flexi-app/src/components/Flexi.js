import React, { Component } from 'react';

class Flexi extends Component{
	constructor(props){
    	super(props);
    	this.state={
			"initialArray": this.props.config.items,
			"personsState": this.props.field.personsState,
			"personName": this.props.field.personName
		}
		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
	}
	componentDidMount(){		 
		// console.log('state are ',this.state);		 
	}
	handleStateChange = (event) => {
		this.setState({"personsState": event.target.value});
	}
	handleNameChange = (event) => {
		this.setState({"personName": event.target.value});
	}
	render(){
		let formLIST = this.state.initialArray.map( (value, index) => {
			let {name, label, type} = value,
				inputField = type !== "DropDown",
				optionList = value.values && value.values.map( (values, i) => <option key={i} value={values}>{values}</option>);
			inputField = inputField ? (
				<input className="form-control" value={this.state.personName} placeholder={label} onChange={this.handleNameChange} type={type} name={name} id={name}/>
			) : (
				<select className="form-control" value={this.state.personsState} onChange={this.handleStateChange} id={name}>{optionList}</select>
			);
			return (
				<div  className="form-group" key={index}>
					<label htmlFor={name}>{label}</label>
					{inputField}
				</div>
			);
		})
		return(
			<form className="flexi-form" onSubmit={(event) => this.props.submitForm(event, this.state.personName, this.state.personsState)}>
				<h2>Flexi app</h2>
				{formLIST}
				<input type="submit" value="Submit" className="btn btn-primary" />
			</form>
		)
	}
}

export default Flexi;