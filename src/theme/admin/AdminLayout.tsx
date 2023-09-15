import { Navigate, Outlet } from "react-router-dom";
import { Layout, Button, theme } from "antd";
import SideBar from "./Sidebar";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";

const { Header, Content } = Layout;

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const authenticated = useSelector((state: RootState) => state.user.authenticated);
  if (!authenticated) return <Navigate to="/auth/login" />;

  return (
    <section className="adminLayout">
      <Layout className="h-[100vh]">
        <SideBar collapsed={collapsed} />
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </section>
  );
}
