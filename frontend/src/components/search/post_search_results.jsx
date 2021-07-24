import React from 'react'
import PostIndexItem from '../post/post_index_item'
import { withRouter } from 'react-router'
const queryString = require('query-string')
class PostSearch extends React.Component{
    componentDidMount(){
        const searchFilter = queryString.parse(this.props.location.search)
        this.props.requestPosts(searchFilter.category, searchFilter.searchText)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
          const searchFilter = queryString.parse(this.props.location.search)
          this.props.requestPosts(searchFilter.category, searchFilter.searchText)
        }
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

export default withRouter(PostSearch)
