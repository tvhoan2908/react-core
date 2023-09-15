import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useRedux";
import { logout } from "../../../stores/UserReducer";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link to="/admin/user">Go to user</Link>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  );
}
