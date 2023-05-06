

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';

import HomeView from './pages/Home/Home';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<HomeView />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;