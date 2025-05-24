import {
	createBrowserRouter,
} from "react-router";
import MainLayout from "@/shared/layout/MainLayout";
import { Routes } from "./routes";

const router = createBrowserRouter([
	{
		path: Routes.HOME,
		Component: MainLayout,
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
