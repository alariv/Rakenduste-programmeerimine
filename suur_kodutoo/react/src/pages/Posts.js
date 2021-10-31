import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts, updatePost } from "../store/actions";
import { Button, Input, Table } from "antd";
import { EditTwoTone } from '@ant-design/icons'



function Posts() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [ID, setID] = useState("");
  const [changing, setChanging] = useState(false);
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);
  const descInputRef = useRef(null);
  let posts = state.posts.data

  useEffect(() => {
    posts = state.posts.data
  }, [])

  const columns = [
    {
      title: 'Autor',
      dataIndex: 'Author',
      key: 'Author',
    },
    {
      title: 'Pealkiri',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Sisu',
      dataIndex: 'Description',
      key: 'Description',
    },
    {
      title: '',
      dataIndex: 'Edit',
      key: 'Edit',
    },
  ];

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewPost()
    setTitle(""); 
    setDescription("");

    if (inputRef.current) inputRef.current.focus();
  };

  
  const handleUpdate = (e) => {
    e.preventDefault();

    addNewPost()
    setTitle(""); 
    setDescription("");

    if (inputRef.current) inputRef.current.focus();
  };

  const changePost = (id, title, desc) => {
    setChanging(true);
    console.log(`changing post: ${id}`)
    setID(id)

    setTitle(title);
    setDescription(desc);
  }

  const addNewPost = () => {
    const thatTime = Date.now()
    const thatAuthor = state.auth.user;
    const newPost = {
      Id: ID!=="" ? ID : thatTime,
      key: thatTime,
      Title,
      Description,
      Author: thatAuthor,
      Edit: <Button onClick={() => {changePost(thatTime,Title,Description)}} disabled={thatAuthor == state.auth.user ? false : true}>< EditTwoTone /></Button>
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt
    state.auth.user ?
      changing ?
      dispatch(updatePost(newPost)): 
      dispatch(addPost(newPost)): 
      console.log("cannot save, log in")

    setID("")
    setChanging(false)
  };


  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <Input
          ref={descInputRef}
          type="text"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {state.auth.user ?
        <Button type="primary" onClick={
          !changing ? 
            handleSubmit : 
            handleUpdate} >{
              !changing ? 
                "Postita" : 
                "Muuda"}
        </Button> : 
        <div style={{color: "red",fontWeight: 600, fontSize: 18}}>POSTITAMISEKS MINE LOGI SISSE</div>}
      </form>

      <Table dataSource={posts} columns={columns} />
    </div>
  );
}

export default Posts;
