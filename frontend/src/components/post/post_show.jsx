
import React from 'react';

class PostShow extends React.Component{

   componentDidMount(){
    // console.log(this.props)
   this.props.fetchPost(this.props.match.params.postId)

   }
   render(){
       const {post} = this.props
       if(!post){
           return null;
       }
       
       return(
        <div className='post-show-complete-container'>
            <div className='post-show-container'>
                <div className='post-show'>
                    <div className='post-show-upper'>
                    <a href={post.link} target="/">{post.title}</a>
                    {/* <h2>{post.title}</h2> */}
                    <p>{post.description}</p>
                    </div>

                    <div className='post-show-lower'>
                        <span className='post-time'>Last updated at: {post.updatedAt}</span>
                        <span className='post-author'>Posted By: {post.username}</span>
                        <span className='post-category'>Category: {post.category}</span>
                    </div>

                </div>

                <div className='post-comment'>comments</div>

            </div>
    </div>
       )
   
   }
}

export default PostShow