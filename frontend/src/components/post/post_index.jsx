import React from 'react';
import {Link} from 'react-router-dom';  
import PostIndexItem from './post_index_item'


class PostIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    this.props.fetchPosts();
  } 

//   componentWillReceiveProps(newState) {
//     this.setState({ posts: newState.posts });
//   }
    render() {
        const {posts} = this.props
      return (
    
        <div className='body-container'>
        <div className='transition-container'>
            <section className='transition'> 
                <div className='left-1'>
                    <p>Browse and share your favorite educational resources <span>with confidence</span>
                    </p>

                    <img className='transit-icon' src="/images/books.jpg" alt="books" />
        
                </div> 
            </section>
            <div>
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