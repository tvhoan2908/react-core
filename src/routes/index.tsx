import { Navigate, createBrowserRouter } from "react-router-dom";
import { DashboardPage, LoginPage } from "../pages";
import { AuthLayout } from "../theme";
import AdminLayout from "../theme/admin/AdminLayout";
import UserPage from "../pages/Admin/User";
import SuspenseFallback from "../components/SuspenseFallback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin" />,
  },
  {
    path: "",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <SuspenseFallback component={<DashboardPage />} /> },
      { path: "/admin/user", element: <SuspenseFallback component={<UserPage />} /> },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [{ path: "/auth/login", element: <SuspenseFallback component={<LoginPage />} /> }],
  },
  {
    path: "*",
    element: <div>404 Page</div>,
  },
]);
