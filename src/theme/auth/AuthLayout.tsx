import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../stores";

export default function AuthLayout() {
  const authenticated = useSelector((state: RootState) => state.user.authenticated);
  if (authenticated) return <Navigate to="/admin" />;

  return (
    <div className="authLayout">
      <Outlet />
    </div>
  );
}
