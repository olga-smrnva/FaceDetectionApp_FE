import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({ onInputChange, onPictureSubmit, onKeyPress }) => {
	return (
		<div>
			<p className='f3'>
				{'Let\'s start detecting faces!' }
			</p>
			<div className='center'>
				<div className='form input center pa4 pl3 br3 shadow-5'>
					<input className='f5 w-70 center ba b--light-blue' type='text' 
					onChange={onInputChange}
					onKeyPress={onKeyPress}
					/>
					<button 
						className='w-25 br3 grow f4 link pv2 bn white bg-light-purple pointer'
						onClick={onPictureSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}; 

export default ImgLinkForm;


   
