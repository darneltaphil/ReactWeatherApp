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
						<div className="col-md-3 col-md-offset-1">
							<div className="social-links">
								<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-google-plus"></i></a>
								<a href="#"><i className="fa fa-pinterest"></i></a>
							</div>
						</div>
					</div>

					<center><p className="colophon">Copyright 2020 PreMEST - Weather App Project.</p>
					<p className="colophon">Designed by Arnold Kofi  <em>(Nitro)</em>. All rights reserved</p></center>
				</div>
			</footer> 


  );
}

export default Footer;
