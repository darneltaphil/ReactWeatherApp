import React from 'react'

function Header() {
	
  return (

      			<div className="site-header">
				<div className="container">
					<a href="index.html" className="branding">
						<img src="images/logo.png" alt="" className="logo" />
						<div className="logo-type">
							<h1 className="site-title">NitroWeather</h1>
							<small className="site-description">Rain, Sun and Snow ... <em>In your  Pocket</em></small>
						</div>
					</a> 

					<div className="btn btn-info main-navigation">
					 Login
					</div> 

				</div>
			</div> 

  );
}

export default Header;
