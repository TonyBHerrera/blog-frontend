import React, { Component } from "react"
import axios from "axios"

export default class BlogDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        }
    }
    // https://tbh-blog-server.herokuapp.com/blog/${id}

    getBlogItem() {
        axios
            .get(`https://tbh-blog-server.herokuapp.com/blog/${this.state
                .currentId}`
            ).then(response => {
                // console.log("response", response)
                this.setState({
                    blogItem: response.data
                })
            }).catch(error => {
                console.log("getBlogItems Error: ", error)
            })
    }

    componentDidMount() {
        this.getBlogItem()
    }

    render() {

        const {
            title,
            content,
            image_url
        } = this.state.blogItem

        console.log("currentId", this.state.currentId)
        return (
            <div className="blog-container">
                <div className="content-container">
                    <h1>{title}</h1>

                    <div className="featured-image-wrapper">
                        <img src={image_url} />
                    </div>
                    <div className="content">{content}</div>
                </div>
            </div>
        )
    }
}