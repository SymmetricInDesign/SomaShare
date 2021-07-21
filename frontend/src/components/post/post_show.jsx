
import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component{

     constructor(props){
       super(props);
       this.showFlag = false;

    
   }
   componentDidMount(){
    // console.log(this.props)
   this.props.fetchPost(this.props.match.params.postId)

   }

   render(){
       
       const {post, currentUserId, deletePost} = this.props
        if(!post){
           return null;
       }
       console.log(currentUserId)
       console.log(post.user)
       currentUserId === post.user ? this.showFlag=true : this.showFlag=false;
     
       const show_flag = this.showFlag ? 'show' : 'not-show';

      

       return(
        <div className='post-show-complete-container'>
            <div className='post-show-container'>
                <div className='post-show'>
                    <div className='post-show-1'>
                    
                        <a href={post.link} target="_blank">{post.title}</a>
                        <div className='post-show-btns' id={show_flag}>
                        <Link className='post-show-edit' to={`/posts/${post._id}/edit`}>Edit</Link>
                        <button className='post-show-delete' onClick={() => { if (window.confirm('Are you sure you want to delete this post?')) deletePost(post._id) } }>Delete</button>
                        </div>
                   </div>
                    <div className='post-show-2'>
                         <p>{post.description}</p>
                    </div>
    
                   
                    <div className='post-show-3'>
                         <p className='post-time'>Last updated: {post.updatedAt.slice(0,9)}</p>
                         <p className='post-author'>Posted By: <span className='post-show-user'>{post.username}</span></p>
                         <p className='post-category'>Category: {post.category}</p>
                    
                    </div>
                        
                 </div>

                <div className='post-comment'>
                    <p>
                        comment 
                    </p>
                </div>

            </div>
        </div>
       )
   
   }
}

export default PostShow