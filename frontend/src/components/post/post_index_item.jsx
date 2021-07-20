import React from 'react'
class PostIndexItem extends React.Component{

    render(){
        return(
            <div className="post-details">
                <h2>{this.props.post.title}</h2>
                <a href={this.props.post.link}>
                {this.props.post.description}
                </a>
                <p>{this.props.post.date}</p>
            </div>
        )
    }
}

export default PostIndexItem