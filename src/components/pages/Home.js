import NavBar from "../layout/NavBar";
import CreateBlogs from "../forms/CreateBlogs"
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios"

const Home = (props) => {

  const [blogs, setBlogs] = useState(null);
  const history = useHistory()
  useEffect(() => {
    axios
      .get("https://fmd-blog-app.herokuapp.com/blogs", {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (blog) => {
    axios
      .delete(`https://fmd-blog-app.herokuapp.com/${blog._id}`, {
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
  const handleUpdate = (blog) => {
    history.push(`/update/${blog._id}`)
  }

  return (
    <div>
      <NavBar user={props.user} />
      <h1>Home Page</h1>

      <CreateBlogs setBlogs={setBlogs} blogs={blogs} />
    
      BLOGS
      {blogs &&
        blogs.map((blog) => (
          <div key={blog._id}>
              <h6>Name: {blog.created_by}</h6>
            <h6>Title: {" "}{blog.blogs_title}</h6>
            <h6>Content:{" "}
              {blog.blogs_content}{" "}
              {blog.user === props.user._id && (
                <span
                  className="btn btn-danger"
                  style={{marginRight: '5px'}}
                  onClick={() => handleDelete(blog)}
                >
                  x
                </span>
              )}{" "}
               <span
                  className="btn btn-info"
                  onClick={() => handleUpdate(blog)}
                >
                  Update
                </span>
            </h6>
          </div>
        ))}
    </div>
  );
};

export default Home;