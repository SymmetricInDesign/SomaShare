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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a comment:
                        <textarea value={this.state.commentBody} onChange={this.updateBody}/>
                    </label>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default CommentForm
