import React, { Component } from 'react';
import swal from 'sweetalert2';
// import Login from './Login'
import Header from './components/Header'
import Recent from './components/Recent'
import Footer from './components/Footer'
import Weatherdisplay from './components/Weatherdisplay'
import axios from 'axios'; //USING AXIOS TO FETCH BLOG POST WITH AN API

import './components/style.css'

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
			axios.get("/getweather/"+theTownLocation)
			.then(response => {
				//Control Response
				console.log(response)
				if(response.data.success===false){
					swal.fire("Invalid Request", "Your API is either temporarily unavailable or your location is invalid")
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
	
	
  	handleSubmit=(event)=> {
		event.preventDefault();
		const FormLocation=event.target[0].value
		this.setState({value:FormLocation })
  }
	//control the number of recent items saved
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
		{this.state.isLoading ? 
		<center><h1>Loading...</h1></center> :
		<Weatherdisplay getWeatherLocation={this.state.getWeatherLocation}
		getWeatherCurrent={this.state.getWeatherCurrent}/>
		}
		<Recent recentList={this.state.recentSearch}/>
        <Footer />

		</>
    )
  }
}


export default App