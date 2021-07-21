import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field){
        return(e)=>
        this.setState({
            [field]: e.currentTarget.value,
        })
    }
    render(){
        return (
            <div className="form-window">
                <div className="form-box">
                    <h2 className="form-type">{this.props.formType}</h2>
                    <form className="form-form" onSubmit={this.handleSubmit}>
                            <label className="post-label">Title
                                <input type="string" 
                                value={this.state.title}
                                onChange={this.update('title')} 
                                className="post-input"/>
                            </label>
                            <label className="post-label">Category
                            <select name="subject" className="subject">
                                <option value="Mathematics">Mathematics</option>
                                <option value="Science">Science</option>
                                <option value="English">English</option>
                                <option value="Computers">Computers</option>
                            </select>
                            </label>
                            <label className="post-label">Description
                                <textarea 
                                value={this.state.description}
                                onChange={this.update('description')} 
                                className="post-textbox"/>
                            </label>
                            <label className="post-label">Link
                                <input type="string" 
                                value={this.state.link}
                                onChange={this.update('link')} 
                                className="post-input"/>
                            </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;