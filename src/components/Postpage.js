import React from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
import fetchPost from '../store/post/actions'

class Postpage extends React.Component {

    componentDidMount() {
        console.log('@Postpage props:', this.props)
        const post_id = this.props.match.params.id
        console.log('@Postpage fetch this post ID:', post_id)
        // dispatch a thunk function
        this.props.dispatch(fetchPost(post_id))
    }

    render() {
        const { post } = this.props
        if (!post) {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        return (
            <div>
                <h2>{post.title}</h2>
                <ReactMarkdown source={post.content} />
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        post: reduxState.post.post_data
    }
}

const ConnectedPostpage = connect(mapStateToProps)(Postpage)
export default ConnectedPostpage