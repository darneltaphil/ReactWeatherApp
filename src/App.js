import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import swal from 'sweetalert2';
// import Login from './Login'
import Header from './components/Header'
import Recent from './components/Recent'
import Footer from './components/Footer'
import Weatherdisplay from './components/Weatherdisplay'
import axios from 'axios'
import './components/style.css'

const baseUrl="https://weather-backend-29.herokuapp.com"

 class App extends React.Component {
	 
	 constructor() {
    super();
    this.state = {
		value: 'Accra', //Default Town for Weather
		getWeatherLocation: [],
		getWeatherCurrent: [],
		recentSearch:["Accra"],

	};
  }
	 //Lifecycle Methods
	 componentDidMount() {
		this.getWeather()
}
	 
	 componentDidUpdate(prevProps, prevState) {
	if (this.state.value !== prevState.value) {
		this.setState({value:this.state.value })
		this.getWeather()
		this.recordRecentSearch()
	}
}
	

	 //Other Methods
	getWeather = ()=>{
			const theTownLocation = (this.state.value==='')||(this.state.value===undefined)?"Accra":this.state.value
			//axios.get(baseUrl+theTownLocation)
			axios.get("/getWeather/"+theTownLocation)  
			.then(response => {
				//Control Response
				console.log(response)
				if(response.data.success===false){
					swal.fire("Invalid Request", "your location <b>"+theTownLocation+"</b> is invalid")
					this.setState({
					value:"Accra",             
					}) 
				}else{
			
				this.setState({
					getWeatherLocation: response.data.location,
					getWeatherCurrent: response.data.current,                 
				}) }
			})
	};
	
	
  	handleSubmit=(event)=> {
		event.preventDefault();
		const FormLocation=event.target[0].value
		this.setState({value:FormLocation })
  }
	//control the number of recent items saved
	recordRecentSearch = () =>{
		if ((this.state.recentSearch.length<5) && (this.state.recentSearch.indexOf(this.state.value)!==-1)){
		this.setState({
		  recentSearch: [...this.state.recentSearch, this.state.value],
			});
		}
  	}

render(){
    return (
		<Router>                
		<Header/>
		<div className="hero form-bg"  >
               <div className="container">
                  <form  onSubmit={this.handleSubmit} name="SearchForm"   className="find-location"  >
                    <input  type="text" name="town" placeholder="Find your location..." required/>
		        	<input type="submit" value="Find Location"/>
                  </form>
               </div>
           </div>       						
		
		<Route exact path="/" component={()=><Weatherdisplay 
				getWeatherLocation={this.state.getWeatherLocation}
				getWeatherCurrent={this.state.getWeatherCurrent}/> 
			 }/> 
		
		<Recent recentList={this.state.recentSearch}/>
        <Footer />
		</Router>  
    )
  }
}
export default App