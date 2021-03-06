import React from "react"
import { Link } from "react-router-dom"

const BlogItem = props => {
    const {
        content,
        image_url,
        title,
        id
    } = props.blogItem

    return (
        <div>
            <Link to={`/b/${id}`}>
                <h1>{title}</h1>
            </Link>
            <div>{content}</div>
        </div>
    )
}

export default BlogItem