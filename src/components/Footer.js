import React, {useState} from 'react';

function Footer() {
  return (
    			<footer class="site-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<form action="#" class="subscribe-form">
								<input type="text" placeholder="Enter your email to subscribe..."/>
								<input type="submit" value="Subscribe"/>
							</form>
						</div>
						<div class="col-md-3 col-md-offset-1">
							<div class="social-links">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								<a href="#"><i class="fa fa-google-plus"></i></a>
								<a href="#"><i class="fa fa-pinterest"></i></a>
							</div>
						</div>
					</div>

					<center><p class="colophon">Copyright 2020 PreMEST - Weather App Project.</p>
					<p class="colophon">Designed by Arnold Kofi  <em>(Nitro)</em>. All rights reserved</p></center>
				</div>
			</footer> 


  );
}

export default Footer;
