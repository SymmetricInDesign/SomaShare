import React from 'react'
import PostIndexItem from '../posts/post_index_item'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom';  

const queryString = require('query-string')

class PostSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {activeButton: "newest"}
        this.postsSortedByDate = [] 
    }

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

    setActive(str){
        this.setState({activeButton: str})
      }
    
    ratingComparator(post1, post2){
        if (post1.rating > post2.rating){
            return 1
        }else if (post1.rating < post2.rating){
            return -1
        }else{
            return 0
        }
    }
 
    render() {
        let {posts} = this.props     
        if (this.postsSortedByDate.length !== posts.length){
            this.postsSortedByDate = []
            posts.forEach(post=>{
              this.postsSortedByDate.push(post)
            })
          }
          
          if (this.state.activeButton === "best"){
            posts.sort(this.ratingComparator)
          }
      
          if (this.state.activeButton === "newest" && this.postsSortedByDate.length > 0){
            posts = this.postsSortedByDate
          }

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
                    <div className="create-post-index">
                    <div className="sort-button-container">
                      {this.state.activeButton === "newest" ? 
                        <div className="sort-button-active" onClick={() => this.setActive("newest")}>Newest</div>
                      :
                        <div className="sort-button" onClick={() => this.setActive("newest")}>Newest</div>
                      }
                      {this.state.activeButton === "best" ? 
                        <div className="sort-button-active" onClick={() => this.setActive("best")}>Best</div>
                      :
                        <div className="sort-button" onClick={() => this.setActive("best")}>Best</div>
                      }
                    </div>
                    <Link className="login-nav-btn" to={'/posts/new'}>Create Post</Link>
                  </div>
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
