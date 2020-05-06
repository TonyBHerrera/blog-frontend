import React, { Component } from "react"
import axios from "axios"
import BlogItem from "../blog-comps/blog-item"

export default class Blog extends Component {
    constructor() {
        super()

        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this)
    }

    getBlogItems() {
        axios.get("https://tbh-blog-server.herokuapp.com/blogs")
            .then(response => {
                console.log("respone", response)
                this.setState({
                    blogItems: response.data
                })
            }).catch(error => {
                console.log("getBlogItems error", error)
            })
    }

    componentWillMount() {
        this.getBlogItems()
    }


    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem blogItem={blogItem} />
        })
        return (
            <div>
                {blogRecords}
            </div>
        )
    }
}