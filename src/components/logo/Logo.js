import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face-detection.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3">
					<img style={{paddingTop: '4px'}}src={face} alt='logo'/>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;