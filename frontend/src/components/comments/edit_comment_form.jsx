import React from 'react';
import { Link } from 'react-router-dom';

class EditCommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            commentBody: props.comment.commentBody,
            postId: props.postId,
            _id: props.comment._id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateComment(this.state)
        this.props.stopEditing()
    }

    updateBody(e){
        this.setState({commentBody: e.target.value})
    }


    render(){
        const {stopEditing, postId, comment} = this.props
        return(
            <div className="comment-index-item">
                <form className='comment-form-container' onSubmit={this.handleSubmit}>
                    <div className='comment-textarea'><textarea value={this.state.commentBody} onChange={this.updateBody} maxLength="600"/></div>
                    <input className='comment-submit-btn' type='submit' />
                </form>
            </div>
        )
    }
}

export default EditCommentForm
