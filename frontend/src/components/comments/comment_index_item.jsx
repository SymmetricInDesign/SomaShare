import React from 'react';


class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='comment-index-item'>
                <div className='comment-username'>{this.props.comment.username}:</div>
                <div className='comment-body'>{this.props.comment.commentBody}</div>
            </div>
        )
    }
}

export default CommentIndexItem