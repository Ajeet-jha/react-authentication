import { RouterProvider } from 'react-router-dom';
import router from './routes';
import Layout from './components/Layout';

function App() {
	return (
		<Layout className="app">
			<RouterProvider router={router} />
		</Layout>
	);
}

export default App;
