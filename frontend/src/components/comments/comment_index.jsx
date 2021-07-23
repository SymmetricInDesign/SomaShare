import React from 'react';
import { fetchCommentsForPost } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component{

    componentDidMount(){
        this.props.fetchCommentsForPost(this.props.postId)
    }

    render(){
        const {comments} = this.props
        if (comments && comments.length > 0){
        return (
            <div>
                <ul>
                    { comments.map(comment => (
                        <CommentIndexItem
                        key={comment._id}
                        comment={comment}
                        postId={this.props.postId}
                        deleteComment = {this.props.deleteComment}
                        currentUserId = {this.props.currentUserId}
                        />
                    ))
                    }
                </ul>
            </div>
        )} else 
        return <div></div>
    }

}

export default CommentIndex