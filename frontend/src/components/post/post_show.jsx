
import React from 'react';

class PostShow extends React.Component{

     constructor(props){
       super(props)
    
   }
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
                    <div className='post-show-1'>
                    
                        <a href={post.link} target="_blank">{post.title}</a>
                        <button>edit</button>
                        <button>delete</button>
                   </div>
                    <div className='post-show-2'>
                         <p>{post.description}</p>
                    </div>
                    {/* <h2>{post.title}</h2> */}
                   
                    <div className='post-show-3'>
                         <span className='post-time'>Last updated at: {post.updatedAt}</span>
                         <span className='post-author'>Posted By: {post.username}</span>
                         <span className='post-category'>Category: {post.category}</span>
                      
                        {/* <div className='post-show-lower-right'>
                            <button>delete</button>
                            <button>edit</button> */}

                    </div>
                        
                 </div>

                <div className='post-comment'>comments</div>

            </div>
        </div>
       )
   
   }
}

export default PostShow