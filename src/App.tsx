

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';

import HomeView from './pages/Home/Home';
import BookDetail from './components/BookDetail/BookDetail';
import Favorities from './components/Favorities/Favorites';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<HomeView />} />
			<Route path="/book/:id" element={<BookDetail />} />
			<Route path="/favorities" element={<Favorities />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;