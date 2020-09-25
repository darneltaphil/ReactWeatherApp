import React from 'react';

function Footer() {
  return (
    			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<form action="#" className="subscribe-form">
								<input type="text" placeholder="Enter your email to subscribe..."/>
								<input type="submit" value="Subscribe"/>
							</form>
						</div>
						
					</div>

					<center><p className="colophon">Copyright 2020 PreMEST - Weather App Project.</p>
					<p className="colophon">Designed by Arnold Kofi  <em>(Nitro)</em>. All rights reserved</p></center>
				</div>
			</footer> 
  );
}

export default Footer;
