import React from 'react';
import EditCommentFormContainer from './edit_comment_form_container'
import {Link} from 'react-router-dom'


class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editing: false
        }
        this.stopEditing = this.stopEditing.bind(this)
    }
    stopEditing(){
        this.setState({editing: false})
    }

    render(){
      const {comment} = this.props
      if (!this.state.editing){
          return(
              <div className='comment-index-item'>
              <div className="comment-content">
                  <Link to={`/users/${comment.user}`}>
                      <div className='comment-username'>{comment.username}</div>
                  </Link>
                  <div className='comment-body'>{comment.commentBody}</div>
              </div>
              {comment.user == this.props.currentUserId ? 
                <div className="comment-buttons-container">
                        <div className="form-button edit-button comment-submit-btn" onClick={()=>this.setState({editing: true})}>Edit</div>
                        <div className="form-button edit-button comment-submit-btn" onClick={()=>this.props.deleteComment(comment._id)}>Delete</div>
                </div>
              :
                null
              }
              <div className='comment-date'>Last updated: {comment.updatedAt.slice(0, 10)}</div>
          </div>
          )
      }else{
          return(
              <EditCommentFormContainer
                comment = {comment}
                postId = {this.props.postId}
                stopEditing = {this.stopEditing}
              />
          )
      }
    }
  
}

export default CommentIndexItem