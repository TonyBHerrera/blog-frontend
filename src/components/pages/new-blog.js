import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import DropzoneComponent from "react-dropzone-component"
import request from "superagent";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default function NewBlog() {
    const [blog, setBlogs] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image_url, setImage_url] = useState("")
    const [editId, setEditId] = useState("")
    const [editMode, setEditMode] = useState(false)
    const imageRef = useRef(null)

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

    const componentConfig = () => {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }

    const djsConfig = () => {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    // const handleDrop = () => {
    //     return {

    //         addedfile: file => setImage_url(file)
    //     }
    // }

    const handleDrop = () => {
        return {
            addedfile: (file) => {
                let upload = request
                    .post("	https://api.cloudinary.com/v1_1/tonecloud/image/upload")
                    .field("upload_preset", "blog-images")
                    .field("file", file);
                upload.end((err, res) => {
                    if (err) {
                        console.log("Cloudinary error: ", err);
                    }
                    if (res.body.secure_url !== "") {
                        setImage_url(res.body.secure_url);
                    }
                });
            },
        };
    };




    const handleSubmit = (e) => {
        e.preventDefault()
        if (editMode) {

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
                    imageRef.current.dropzone.removeAllFiles()
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
                    imageRef.current.dropzone.removeAllFiles()
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
            <form onSubmit={handleSubmit} className="new-blog-wrappper">
                <div className="one column">
                    <input
                        type="title"
                        name="title"
                        placeholder="Blog Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="one-column">
                    <textarea
                        type="text"
                        name="Content"
                        placeholder="Blog Content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                {/* <div>
                        <input
                            type="text"
                            name="image_url"
                            placeholder="image_url"
                            value={image_url}
                            onChange={e => setImage_url(e.target.value)}
                        />
                    </div> */}
                <div className="image-uploaders one-column">
                    <DropzoneComponent
                        ref={imageRef}
                        config={componentConfig()}
                        djsConfig={djsConfig}
                        eventHandlers={handleDrop()}
                    >

                    </DropzoneComponent>
                </div>
                <div>
                    <button type="submit"> Create New Blog </button>
                </div>
            </form>
            <div>
                {mappedBlogs()}
            </div>
        </div>
    )

}