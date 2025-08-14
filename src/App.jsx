import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './comp/Layout';
import Home from './comp/Home';
import Login from './comp/Login';

function App() {
	return (
		<>
			<h1>과제 : 김동현</h1>
			<hr />
			<HashRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route
							path="Day040812"
							element={<Day040812 />}
						/>
					</Route>
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
