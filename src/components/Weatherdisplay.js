import React from 'react'

export default class Router extends React.Component {
	
    render(){ 
     
        return (
                <div className="forecast-table">
                <div className="container">
            <div className="forecast-container">
                <div class="today forecast">
                    <div class="forecast-header">
                        <div class="day">{this.props.getWeatherLocation.localtime}</div>
                        <div class="date"> </div>
                    </div> 
                    <div class="forecast-content">
                        <div class="location"> {this.props.getWeatherLocation.name}, {this.props.getWeatherLocation.country} </div>
                        <div class="degree">
                            <div class="num">{this.props.getWeatherCurrent.temperature}<sup>o</sup>C</div>
                            <div class="forecast-icon">
                                <img src="./images/icons/icon-1.svg" alt="" width="90"/>
                            </div>	
                        </div>
                    </div>
    
                </div>    
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Weather Details</div>
                    </div> 
                    <div class="location">
                    
                        <div class="forecast-icon">
                            <img src="images/icons/icon-3.svg" alt="" width="48"/>
                        </div>
                        <p class="detail-title">Rainfall: <img to="./components/images/icon-umberella.png" alt=""/> {this.props.getWeatherCurrent.precip}</p>
                        <p class="detail-title">Wind Speed:<img src="images/icon-wind.png" alt=""/>{this.props.getWeatherCurrent.wind_speed}km/h</p>
                        <p className="detail-title">Wind Rirection: <img src="images/icon-compass.png" alt=""/>{this.props.getWeatherCurrent.wind_dir}</p>
                        <p className="detail-title">Pressure: <img src="images/icon-compass.png" alt=""/>{this.props.getWeatherCurrent.pressure}</p>
                        <p className="detail-title">Cloudcover: <img src="images/icon-compass.png" alt=""/>{this.props.getWeatherCurrent.cloudcover}</p>
    
                        
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Location Details </div>
                    </div> 
                    <div class="">
                    
                        <div class="forecast-icon">
                            <img src="images/icons/icon-3.svg" alt="" width="48"/>
                        </div>
                        <p className="detail-title">Time Zone: <img to="./images/icon-umberella.png" alt=""/> {this.props.getWeatherLocation.timezone_id}</p>
                        <p className="detail-title">Latitude:<img src="images/icon-wind.png" alt=""/>{this.props.getWeatherLocation.lat}<sup>o</sup></p>
                        <p className="detail-title">Longitude: <img src="images/icon-compass.png" alt=""/>{this.props.getWeatherLocation.lon}<sup>o</sup></p>
                        <p className="detail-title">Region: <img src="images/icon-compass.png" alt=""/>{this.props.getWeatherLocation.region}</p>
                        <p className="detail-title">Local Time: <img src="images/icon-compass.png" alt=""/>{this.props.getWeatherLocation.localtime}</p>
    
                        
                    </div>
                </div>
    
            
            </div>
    
        </div>
        </div>
    )}
    }
    