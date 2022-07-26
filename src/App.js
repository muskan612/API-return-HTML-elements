import Input from './components/Input';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './components/Result';

function App() {
	return (
		// <Input />
		<Router>
			<Routes>
				<Route exact path='/' element={<Input />} />
				<Route path='/result' element={<Result />} />
			</Routes>
		</Router>
	);
}

export default App;
