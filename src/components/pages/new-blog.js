import React, { useState, useEffect } from "react"
import axios from "axios"
// import DropzoneComponent from "react-dropzone-component"
export default function NewBlog() {
    const [blog, setBlogs] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image_url, setImage_url] = useState("")
    const [editId, setEditId] = useState("")
    const [editMode, setEditMode] = useState(false)

    const handleEditClick = (blog) => {
        setTitle(blog.title)
        setContent(blog.content)
        setImage_url(blog.image_url)
        setEditId(blog.id)
        setEditMode(true)
    }


    useEffect(() => {
        getBlogs()
    }, [])




    const handleSubmit = (e) => {
        e.preventDefault()
        if (editMode) {
            // displayCancelButton()
            axios
                .patch(`https://tbh-blog-server.herokuapp.com/blog/${editId}`, {
                    title,
                    content,
                    image_url
                })
                .then((response) => {
                    console.log("Blog post Added", response)
                    getBlogs()
                    mappedBlogs()
                })
                .then(() => {
                    setTitle(""),
                        setContent("")
                    setImage_url("")
                    setEditId("")
                    setEditMode(false)
                })
                .catch((error) => {
                    console.log("Error with the Patch", error)
                })
        } else {
            axios
                .post("https://tbh-blog-server.herokuapp.com/add-blog", {
                    title,
                    content,
                    image_url
                })
                .then(() => {
                    setTitle("")
                    setContent("")
                    setImage_url("")
                })
                .catch((error) => console.log("form submit error: ", error))
        }
    }

    const getBlogs = () => {
        axios
            .get("https://tbh-blog-server.herokuapp.com/blogs")
            .then(response => {
                setBlogs([...response.data])
                mappedBlogs()
            })
            .catch(error => console.log("getBlogs error ", error))
    }
    const deleteBlog = (id) => {
        axios
            .delete(`https://tbh-blog-server.herokuapp.com/blog/${id}`)
            .then(setBlogs(blog.filter(blog => blog.id !== id)))
            .catch(err => console.log("Delete Blog error", err))
    }

    const mappedBlogs = () => {
        return (
            blog.map(function (blog) {
                return (
                    <div>
                        <h1>{blog.title}</h1>
                        <p>{blog.content}</p>
                        <button onClick={() => handleEditClick(blog)}>Edit Blog</button>
                        <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
                    </div>
                    // <div>
                    //    
                    //     <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
                    // </div>
                )
            })
        )
    }


    return (
        <div>
            <div>
                <div>
                    {mappedBlogs()}
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="title"
                        name="title"
                        placeholder="Blog Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <input
                        type="text"
                        name="Content"
                        placeholder="Blog Content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                    <input
                        type="text"
                        name="image_url"
                        placeholder="image_url"
                        value={image_url}
                        onChange={e => setImage_url(e.target.value)}
                    />
                    <div>
                        <button type="submit"> Create New Blog </button>

                    </div>
                </form>
            </div>
        </div>

    )
}