import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            commentBody: '',
            username: this.props.username,
            postId: this.props.postId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateBody = this.updateBody.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state)
    }

    updateBody(e){
        console.log(this.state)
        this.setState({commentBody: e.target.value})
    }


    render(){
        return(
            <div >
                <form className='comment-form-container' onSubmit={this.handleSubmit}>
                    <div className='comment-textarea'><textarea value={this.state.commentBody} onChange={this.updateBody} placeholder="Write a comment" cols="80" rows="8"/></div>
                    <input className='comment-submit-btn' type='submit' />
                </form>
            </div>
        )
    }
}

export default CommentForm
