import { lazy } from "react";

export enum Routes {
	HOME = '/',
}

export const MainLayoutLazy = lazy(() => import("../shared/layout/main-layout"));