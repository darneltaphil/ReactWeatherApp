import React from 'react'

export default class Router extends React.Component {
	
    render(){ 
     
        return (
                <div className="forecast-table">
                <div className="container">
            <div className="forecast-container">
                <div className="today forecast">
                    <div className="forecast-header">
                        <div className="day">{this.props.getWeatherLocation.localtime}</div>
                        <div className="date"> </div>
                    </div> 
                    <div className="forecast-content">
                        <div className="location"> {this.props.getWeatherLocation.name}, {this.props.getWeatherLocation.country} </div>
                        <div className="degree">
                            <div className="num">{this.props.getWeatherCurrent.temperature}<sup>o</sup>C</div>
                            <div className="forecast-icon">
                                
                            </div>	
                        </div>
                    </div>
    
                </div>    
                <div className="forecast">
                    <div className="forecast-header">
                        <div className="day">Weather Details</div>
                    </div> 
                    <div className="location">
                    
                        <div className="forecast-icon">
                           
                        </div>
                        <p className="detail-title">Rainfall:  {this.props.getWeatherCurrent.precip}</p>
                        <p className="detail-title">Wind Speed: {this.props.getWeatherCurrent.wind_speed}km/h</p>
                        <p className="detail-title">Wind Rirection: {this.props.getWeatherCurrent.wind_dir}</p>
                        <p className="detail-title">Pressure:{this.props.getWeatherCurrent.pressure}</p>
                        <p className="detail-title">Cloudcover: {this.props.getWeatherCurrent.cloudcover}</p>
    
                        
                    </div>
                </div>
                <div className="forecast">
                    <div className="forecast-header">
                        <div className="day">Location Details </div>
                    </div> 
                    <div className="">
                    
                        <div className="forecast-icon">
                        </div>
                        <p className="detail-title">Time Zone:  {this.props.getWeatherLocation.timezone_id}</p>
                        <p className="detail-title">Latitude:{this.props.getWeatherLocation.lat}<sup>o</sup></p>
                        <p className="detail-title">Longitude: {this.props.getWeatherLocation.lon}<sup>o</sup></p>
                        <p className="detail-title">Region: {this.props.getWeatherLocation.region}</p>
                        <p className="detail-title">Local Time: {this.props.getWeatherLocation.localtime}</p>
    
                        
                    </div>
                </div>
    
            
            </div>
    
        </div>
        </div>
    )}
    }
    