import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
	<div className='center mb5 mt2'>
		<div className='relative'>
			<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{overflow: 'auto'}}/>
			{box.map((box) => (
				<div
					key={box.id}
					className="bounding-box"
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol,
					}}
				></div>
			))}
		</div>
	</div>
  );
}

export default FaceRecognition;