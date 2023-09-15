import React from "react";

export const LoginPage = React.lazy(() => import("./Auth/Login"));
export const DashboardPage = React.lazy(() => import("./Admin/Dashboard"));
export const HomePage = React.lazy(() => import("./Home"));
export const UserPage = React.lazy(() => import("./Admin/User"));
