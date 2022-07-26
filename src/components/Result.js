import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = () => {
	return (
		<div className='full-page'>
			<div className='top'>
				<h1>Results</h1>
				<Link to='/'>
					<button type='submit' className='btn'>
						Run Again
					</button>
				</Link>
			</div>

			{/* hard-coded results judt for reference */}
			<div className='results'>
				<div className='result-box'>
					<section className='text-box'>H1 TEXT HERE</section>
					<section className='info'>
						<h3>Name</h3>
						<p>HTML COMPONENT NAME</p>
						<h3>Occurrances</h3>
						<p>5</p>
					</section>
				</div>
				<div className='result-box'>
					<section className='text-box'>H1 TEXT HERE</section>
					<section className='info'>
						<h3>Name</h3>
						<p>HTML COMPONENT NAME</p>
						<h3>Occurrances</h3>
						<p>5</p>
					</section>
				</div>
				<div className='result-box'>
					<section className='text-box'>H1 TEXT HERE</section>
					<section className='info'>
						<h3>Name</h3>
						<p>HTML COMPONENT NAME</p>
						<h3>Occurrances</h3>
						<p>5</p>
					</section>
				</div>
				<div className='result-box'>
					<section className='text-box'>H1 TEXT HERE</section>
					<section className='info'>
						<h3>Name</h3>
						<p>HTML COMPONENT NAME</p>
						<h3>Occurrances</h3>
						<p>5</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Result;
