import NavBar from "../layout/NavBar";
import CreateBlogs from "../forms/CreateBlogs"
import {useEffect, useState} from 'react'
import axios from "axios"

const Home = (props) => {

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs", {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (blog) => {
    axios
      .delete(`http://localhost:5000/blogs/${blog._id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBlogs([...blogs.filter((b) => b._id !== blog._id)]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavBar user={props.user} />
      <h1>Home Page</h1>

      <CreateBlogs setBlogs={setBlogs} blogs={blogs} />
    

      {blogs &&
        blogs.map((blog) => (
          <div key={blog._id}>
            <h6>{blog.created_by}</h6>
            <h6>{blog.blogs_title}</h6>
            <h6>
              {blog.blogs_content}{" "}
              {blog.user === props.user._id && (
                <span
                  className="btn btn-danger"
                  onClick={() => handleDelete(blog)}
                >
                  x
                </span>
              )}{" "}
            </h6>
          </div>
        ))}
    </div>
  );
};

export default Home;