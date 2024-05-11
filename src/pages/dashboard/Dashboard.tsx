import { Layout, Menu, MenuProps } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import { GoHome } from "react-icons/go";

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: "Dashboard",
    children: [
      {
        key: "All Donation",
        label: <NavLink to="/dashboard/donations">All Donation</NavLink>,
      },
      {
        key: "Create Donation",
        label: <NavLink to="create-donation">Create Donation</NavLink>,
      },
      {
        key: "Create Testimonial",
        label: <NavLink to="create-testimonial">Create Testimonial</NavLink>,
      },
    ],
  },
];

const Dashboard = () => {
  return (
    <Layout style={{ backgroundColor: "#008080" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
         <Link to='/'>
         <GoHome
            style={{ fontSize: "40px", textAlign: "center", color: "white",marginTop:'10px' }}
          /></Link>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
