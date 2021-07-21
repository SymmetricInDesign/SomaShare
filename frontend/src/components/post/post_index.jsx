import React from 'react';
// import {Link} from 'react-router-dom';  
import PostIndexItem from './post_index_item'


class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  } 

render() {
  const {posts} = this.props
  return (
    <div className='body-container'>
        <div className='post-body-container'>
            <div className='post-headline'>
               
                <p>Browse.</p>
                <p>Share.</p>
                <p>Connect.</p>
                {/* <img className='transit-icon' src="/images/index_2.jpeg" alt="books" /> */}
    
            </div> 
      
            <div className='post-headline-1'>
                <h2>Newest</h2>
                {/* <div>Hello</div> */}
                {posts ? 
                <ul className='posts-index'>
                        {posts.map((post)=>(
                        
                            <PostIndexItem
                                key={post._id}
                                post={post}
                                />           
                        ))}
                </ul>
                :
                null
                }
            </div>   
        
        </div>
    </div>
    )
  }
}

export default PostIndex;