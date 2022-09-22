import * as ReactDom from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import App from 'src/app';
import './index.css';

const root = ReactDom.createRoot(
	document.getElementById('root') as HTMLDivElement,
);

const rooter = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
			// loader={async () => {
			// 	if (new Date().getTime() % 2 === 0) {
			// 		throw new Error();
			// 	}
			// }}
			// errorElement={<h1>404</h1>}
		/>,
	),
);

root.render(<RouterProvider router={rooter} />);

// TODO: Add react-router
