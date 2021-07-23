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
        this.setState({commentBody: ""})
    }

    updateBody(e){
        this.setState({commentBody: e.target.value})
    }


    render(){
        return(
            // <div >
                <form className='comment-form-container' onSubmit={this.handleSubmit}>
                    <div className='comment-textarea'><textarea value={this.state.commentBody} onChange={this.updateBody} maxLength="600" placeholder="Write a comment" /></div>
                    <input className='comment-submit-btn' type='submit' />
                </form>
            // </div>
        )
    }
}

export default CommentForm
