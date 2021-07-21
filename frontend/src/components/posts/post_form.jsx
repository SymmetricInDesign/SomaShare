import React from 'react';
import {CATEGORIES} from '../../util/categories'

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = props.post ? props.post : {};
        this.state.category = CATEGORIES[0]
        this.state.username = props.username
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
    }
    componentDidMount(){
        if (this.props.formType == "Update Post")  this.props.fetchPost(this.props.match.params.postId)
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
        this.props.action(this.state);
    }

    update(field){
        return(e)=>
        this.setState({
            [field]: e.currentTarget.value,
        })
    }
    render(){
        const categoryOptions = CATEGORIES.map((category, idx)=>(
            <option key={idx} value={category}>{category[0].toUpperCase() + category.slice(1)}</option>
        ))
        // if (!this.state.title && this.props.post){
        //     this.setState({title: this.props.post.title, description: this.props.post.description, link: this.props.post.link})
        // }
        if (this.state) {
            return (
                <div className="form-window">
                    <div className="form-box">
                        <h2 className="form-type">{this.props.formType}</h2>
                        <form className="form-form" >
                                <label className="post-label">Title
                                    <input type="string" 
                                    value={this.state.title}
                                    onChange={this.update('title')} 
                                    className="post-input"/>
                                </label>
                                <label className="post-label">Category
                                <select name="subject" className="subject" onChange={this.update('category')}>
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
                                <div onClick={this.handleSubmit} className="post-submit-btn">{this.props.formType}</div>
                        </form>
                    </div>

                </div>
        )
        } else {
            return <h1></h1>
        }
    }
}

export default PostForm;