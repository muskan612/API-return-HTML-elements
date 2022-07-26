import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Input.css';

const Input = () => {
	const textRef = useRef();
	let doc;
	// let obj = {};
	// let defaultValue = 1;

	// const check = (node) => {
	// 	let elements = doc.querySelectorAll(node.tagName);
	// 	var tag = node.tagName;
	// 	console.log(typeof elements[0]);
	// 	for (let i = 0; i < elements.length - 1; i++) {
	// 		for (let j = i + 1; j < elements.length - 1; ) {
	// 			if (elements[0].isEqualNode(elements[1])) {
	// 				obj[tag] = defaultValue + 1;
	// 				console.log(obj);
	// 			} else {
	// 				j++;
	// 			}
	// 		}
	// 		// elements.remove('button');
	// 		// console.log(elements);
	// 	}
	// 	console.log(obj.button);
	// };

	const convert = (str) => {
		let parser = new DOMParser();
		doc = parser.parseFromString(str, 'text/html');
		let nodes = doc.body.children;
		console.log(doc.body, nodes);
		// for (let i = 0; i < nodes.length; i++) {
		// check(nodes[0]);
		// }
		// return doc.querySelectorAll(
		// 	nodes[0].tagName + '.' + nodes[0].classList.value
		// );
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		convert(textRef.current.value);
		// console.log(convert(textRef.current.value));
	};
	return (
		<div className='container'>
			<h1>Find Similar Nodes</h1>
			<h4>Paste HTML in textbox below</h4>
			<form className='form' onSubmit={handleSubmit}>
				<textarea name='input-html' id='text-area' ref={textRef}></textarea>
				<Link to='/result'>
					<button type='submit' className='btn'>
						Process Code
					</button>
				</Link>
			</form>
		</div>
	);
};

export default Input;
