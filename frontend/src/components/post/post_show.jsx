import { NULL } from 'node-sass';
import React from 'react';

class PostShow extends React.Component{

     constructor(props){
       super(props)
    
   }
   componentDidMount(){
       
   this.props.fetchPost(this.props.match.params.postId)

   }
   render(){
       const {post} = this.props
       if(!post){
           return null;
       }
       
       return(
        <div className='post-show-container'>
            <div className='post-show'>
                <div className='post-show-upper'>
                <a href={}></a>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                </div>

                <div className='post-show-lower'>
                    <span className='post-timie'>Last updated at: {post.updatedAt}</span>
                    <span className='post-author'>By: {post.user.username}</span>
                     <span className='post-category'>Category: {post.category}</span>
                </div>

                <div className='post-comment'>COMMENT SECTION TO BE ADDED </div>
                


            </div>

        </div>
       )
   
   }
}

export default PostShow