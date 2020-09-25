import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Login from './Login'
import Header from './components/Header'
import Recent from './components/Recent'
import Footer from './components/Footer'
import Weatherdisplay from './components/Weatherdisplay'
import axios from 'axios'; //USING AXIOS TO FETCH BLOG POST WITH AN API

import './components/style.css'
//import axios from 'axios';

 class App extends React.Component {
	 
	 constructor() {
    super();
    this.state = {
		value: 'Accra', //Default Town for Weather
		getWeatherLocation: [],
		getWeatherCurrent: [],
		recentSearch:["Accra"],
		isLoading: true,

	};
   	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.getWeather = this.getWeather.bind(this)
	this.recordRecentSearch	= this.recordRecentSearch.bind(this) 
  }
	 //Lifecycle Methods
	 componentDidMount() {
		setTimeout(() => {
				this.setState({
					isLoading: false,
					
				})
			}, 2500)
		this.getWeather()
   		//console.log("componentDidMount WhichLocation " + this.state.value)
}
	 
	 componentDidUpdate(prevProps, prevState) {
	if (this.state.value !== prevState.value) {
		this.setState({value:this.state.value })
		//alert("I am in App State  changed new value  " + this.state.value)
		this.getWeather()
		this.recordRecentSearch()
	}
	if (this.state.recentSearch !== prevState.recentSearch) {
}}
	
	 //Other Methods
	getWeather = ()=>{
			const theTownLocation = (this.state.value=='')||(this.state.value==undefined)?"Accra":this.state.value
			//console.log("Getting Weather "+ theTownLocation);
			//console.log("http://api.weatherstack.com/current?access_key=9471ebe8de3a20930d66bc948dc82164&query="+theTownLocation);
			axios.get("http://api.weatherstack.com/current?access_key=837e00581a14b54b44fcb5f46b8d591b&query="+theTownLocation)
			.then(response => {
				//Control Response
				console.log(response)
				if(response.data.success===false){
					alert("Invalid Request: Check your Location... Loading Default Location : Accra/Ghana")
					this.setState({
					//GetWeatherJson: response.data,
					value:"Accra",             
					}) 

				}else{
				this.setState({
					//GetWeatherJson: response.data,
					getWeatherLocation: response.data.location,
					getWeatherCurrent: response.data.current,                 
				}) }
			//console.log(this.state.GetWeatherLocation);
			})
	};
	
 	handleChange=(event)=> {   this.setState({value: event.target.value});  }
	
  	handleSubmit=(event)=> {
		event.preventDefault();
		const FormLocation=event.target[0].value
		//alert('I am Still in App: ' + FormLocation);
		//LocalStorage.setItem('City',FormLocation)
		this.setState({value:FormLocation })
		//console.log("I am in App "+ this.target[0].value)
  }
	
	recordRecentSearch = () =>{
		console.log(this.state.recentSearch)
		if ((this.state.recentSearch.length<5) && (this.state.recentSearch.indexOf(this.state.value)!==-1)){

		this.setState({
		  recentSearch: [...this.state.recentSearch, this.state.value],
			});
		}
		
  	}
	

render(){
	
    return (
		<>
		<Header/>
		<div className="hero form-bg"  >
               <div className="container">
                  <form  onSubmit={this.handleSubmit} name="SearchForm"   className="find-location"  >
                    <input  type="text" name="town" placeholder="Find your location..." required/>
		        	<input type="submit" value="Find Location"/>
                  </form>
               </div>
           </div>       						
		{this.state.isLoading ? <center><h1>Loading...</h1></center> :<><Weatherdisplay getWeatherLocation={this.state.getWeatherLocation}
		getWeatherCurrent={this.state.getWeatherCurrent}/></>}
		<Recent recentList={this.state.recentSearch}/>
        <Footer />

		</>
    )
  }
}


export default App
