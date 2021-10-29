import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Button, DatePicker, version, Table} from "antd";



function Posts() {
  const [Title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {
    dispatch(updatePosts([
      {
        Id: 1,
        Title: "Test-prefetched-array-1"
      },
      {
        Id: 2,
        Title: "Test-prefetched-array-2"
      },
      {
        Id: 3,
        Title: "Test-prefetched-array-3"
      },
      {
        Id: 4,
        Title: "Test-prefetched-array-4"
      },
    ]))

  }, [])

  const columns = [
    {
      title: 'Id',
      dataIndex: 'Id',
      key: 'Id',
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
  ];

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      Id: Date.now(),
      Title,
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
  };

  console.log({ inputRef });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </form>

      <Table dataSource={state.posts.data} columns={columns} />;
    </div>
  );
}

export default Posts;
