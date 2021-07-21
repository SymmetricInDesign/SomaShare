import React from 'react';
import {CATEGORIES} from '../../util/categories'

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
        const categoryOptions = CATEGORIES.map((category, idx)=>(
            <option key={idx} value={category}>{category[0].toUpperCase() + category.slice(1)}</option>
        ))
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
                        {categoryOptions}
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