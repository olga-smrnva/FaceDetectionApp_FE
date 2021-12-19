import React from 'react';

const Greeting = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3'>
				{`Hello, ${name}! Your current detecting score is:`}
			</div>
			<div className='white f1 pt4'>
				{entries}
			</div>
		</div>
	);
}

export default Greeting;