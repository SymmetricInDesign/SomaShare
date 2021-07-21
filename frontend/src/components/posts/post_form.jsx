import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.post
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }
    render(){
        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="post-label">Title
                        <input type="string" 
                        value={this.state.title} 
                        className="post-input"/>
                    </label>
                    <label className="post-label">Category</label>
                    <select name="subject" className="subject">
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        <option value="Computers">Computers</option>
                    </select>
                    <label className="post-label">Description
                        <textarea 
                        value={this.state.title} 
                        className="post-input"/>
                    </label>
                    <label className="post-label">Link
                        <input type="string" 
                        value={this.state.link} 
                        className="post-input"/>
                    </label>
                </form>

            </div>
        )
    }
}

export default PostForm;