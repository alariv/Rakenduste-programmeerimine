import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined, LoginOutlined } from '@ant-design/icons';
import { Header } from "antd/lib/layout/layout";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Heading() {
  const [state, dispatch] = useContext(Context);

  const [current, setCurrent] = useState("mail")

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key)
  };
  
  return (
    <Header>
        <Menu  theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" icon={<MailOutlined />}>
            <Link to="/" style={{marginRight:20}}>Avaleht</Link>
          </Menu.Item>
          <Menu.Item key="posts" icon={<AppstoreOutlined />}>
            <Link to="/posts">Postitused</Link>
          </Menu.Item>
          <Menu.Item danger key="login" icon={<LoginOutlined />}>
            <Link danger to="/login">{!state.auth.user ? "Logi sisse" : "Logi välja"}</Link>
          </Menu.Item>
        </Menu>
    </Header>
  );
}

export default Heading;
