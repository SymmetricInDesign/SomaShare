import React from 'react'
class PostRating extends React.Component{

    constructor(props){
        super(props)
        this.like = this.like.bind(this)
        this.dislike = this.dislike.bind(this)
        this.removeLike = this.removeLike.bind(this)
        this.removeDislike = this.removeDislike.bind(this)
    }

    like(){
        if (this.props.currentUser.dislikedPostIds.includes(this.props.post._id)){
            this.props.updatePostLikes(this.props.post._id, 2)
        }else{
            this.props.updatePostLikes(this.props.post._id, 1)
        }
        this.props.updateUserLikes(this.props.currentUser._id, this.props.post._id, 1)
    }

    dislike(){
        if (this.props.currentUser.likedPostIds.includes(this.props.post._id)){
            this.props.updatePostLikes(this.props.post._id, -2)
        }else{
            this.props.updatePostLikes(this.props.post._id, -1)
        }
        this.props.updateUserLikes(this.props.currentUser._id, this.props.post._id, -1)
    }

    removeLike(){
        this.props.updatePostLikes(this.props.post._id, -1)
        this.props.updateUserLikes(this.props.currentUser._id, this.props.post._id, 0)
    }

    removeDislike(){
        this.props.updatePostLikes(this.props.post._id, 1)
        this.props.updateUserLikes(this.props.currentUser._id, this.props.post._id, 0)
    }

    componentDidMount(){
        this.props.requestUser(this.props.currentUser._id)
    }
    
    render(){
        const {currentUser, post} = this.props
        return (
            <div id="post-rating-container">
                <p>Rating</p>
                {currentUser && currentUser.likedPostIds.includes(post._id) ? 
                    <i onClick={this.removeLike} className="fas fa-thumbs-up"></i>
                    :
                    <i onClick={this.like} className="far fa-thumbs-up"></i>
                }
                {/* <div id="post-rating-digit"> */}
                    <p>{post.rating}</p>
                {/* </div> */}
                {currentUser && currentUser.dislikedPostIds.includes(post._id) ? 
                    <i onClick={this.removeDislike} className="fas fa-thumbs-down"></i>
                    :
                    <i onClick={this.dislike} className="far fa-thumbs-down"></i>
                }
            </div>
        )
    }
}

export default PostRating