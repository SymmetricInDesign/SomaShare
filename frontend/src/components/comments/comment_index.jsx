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
                        key={comment.id}
                        comment={comment}
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