import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Button, DatePicker, version } from "antd";
import { Header } from "antd/lib/layout/layout";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Heading() {

  return (
    <Header>
        <Link to="/" style={{marginRight:20}}>Home</Link>
        <Link to="/posts">POSTS</Link>
    </Header>
  );
}

export default Heading;
