import {
	createBrowserRouter,
} from "react-router";
import { MainLayoutLazy, Routes } from "./routes";

const router = createBrowserRouter([
	{
		path: Routes.HOME,
		Component: MainLayoutLazy,
		children: [
			/*{
				path: "/",
				Component: MainLayout,
				children: [
				]
			},*/
		]
	},
]);

export default router;
