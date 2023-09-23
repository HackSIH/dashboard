import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
// import { getComments, getOrders } from "../../API";


function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

//   useEffect(() => {
//     getComments().then((res) => {
//       setComments(res.comments);
//     });
//     getOrders().then((res) => {
//       setOrders(res.products);
//     });
//   }, []);

  return (
    <div className="AppHeader">
      {/* <Image
        width={40}
        src="https://imgs.search.brave.com/nYgVUN8jviveQt3XI9ZGJj9Dv21IutUcdgzYWDwM5Wo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkRHZrbnNV/N0MvaWR3cVY1WUhv/eC5wbmc_dXBkYXRl/ZD0xNjM1ODkxODgw/NzQ0"
      ></Image> */}
      <img src="https://www.aicte-india.org/sites/default/files/logo_new.png" alt="logo"></img>
      <Typography.Title></Typography.Title>
      <a className="logout" href="/">Logout</a>
      <Space>
        <Badge count={comments.length} dot> 
          <MailOutlined 
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;