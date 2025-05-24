import { lazy } from "react";

export enum Routes {
	HOME = '/',
}

const MainLayoutLazy = lazy(() => import("../shared/layout/MainLayout"));