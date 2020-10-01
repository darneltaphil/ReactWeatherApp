import React from 'react';

function Recent(props) {
	const displayWeather=props.recentList;
	//console.log (displayWeather)
		return (
	         
			<main className="main-content">
				<div className="fullwidth-block">
					<div className="container"> 
			
			<h2 className="section-title">Recent Searches</h2>
						<div className="row">
		
          {displayWeather.map(item => (
				<div className="col-md-3 col-sm-6"  key={item}>
					<div className="live-camera">
						<figure className="live-camera-cover"></figure>
						<h3 className="location">{item}</h3>
						<small className="date"></small>
					</div>
				</div>
          ))}

						</div>
					</div>
				</div>

			</main> 
  );
	}
  


export default Recent;
