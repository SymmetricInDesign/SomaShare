import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state)
    }


    render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a comment:
                        <textarea/>
                    </label>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default CommentForm
