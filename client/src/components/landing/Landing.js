import React from 'react';
import './Landing.css';

const Landing = () => {
	return (
		<div className='landing'>
			<div className='dark-overlay landing-inner text-light'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<h3 className='display-3 mb-4'>Welcom to Travel Buddy</h3>
							<p className='lead'>
								Create an account and share your next destination with others.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
