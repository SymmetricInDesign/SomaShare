import React from 'react';
import EditCommentFormContainer from './edit_comment_form_container'


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
      if (!this.state.editing){
          return(
              <div className='comment-index-item'>
              <div className="comment-content">
                  <div className='comment-username'>{this.props.comment.username}:</div>
                  <div className='comment-body'>{this.props.comment.commentBody}</div>
              </div>
              <div className="review-buttons-container">
                    <div className="form-button edit-button" onClick={()=>this.setState({editing: true})}>Edit</div>
                    <button className="form-button edit-button" onClick={()=>this.props.deleteComment(this.props.comment._id)}>Delete</button>
              </div>
              <div className='comment-date'>Last updated: {this.props.comment.updatedAt.slice(0, 10)}</div>
          </div>
          )
      }else{
          return(
              <EditCommentFormContainer
                comment = {this.props.comment}
                postId = {this.props.postId}
                stopEditing = {this.stopEditing}
              />
          )
      }
    }
  
}

export default CommentIndexItem