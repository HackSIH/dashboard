import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  
  import { Menu } from "antd";

  import { useNavigate } from "react-router-dom";
  
  function SideMenu() {
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "My profile",
              key: "/My_Profile",
              icon: <UserOutlined />,
            },
            {
              label: "Design Curriculum",
              key: "/Design_Curriculum",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Resources",
              key: "/Resources",
              icon: <UserOutlined />,
            },
            {
              label: "My Uploads",
              key: "/My_Uploads",
              icon: <UserOutlined />,
            },
            {
              label: "Analytics",
              key: "/Analytics",
              icon: <UserOutlined />,
            },{
              label: "Collaboration",
              key: "/Collaboration",
              icon: <UserOutlined />,
            }
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;