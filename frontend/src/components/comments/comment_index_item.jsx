import React from 'react';


class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='comment-index-item'>
                <div className='comment-username'>{this.props.comment.username}:</div><br></br>
                <div className='comment-body'>{this.props.comment.commentBody}</div><br></br>
                <div className='comment-date'>Last updated: {this.props.comment.updatedAt.slice(0, 10)}</div>
            </div>
        )
    }
}

export default CommentIndexItem