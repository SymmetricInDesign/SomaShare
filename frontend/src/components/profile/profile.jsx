import React from 'react';
import PostIndexItem from './profile_index_item';
import {Link} from 'react-router-dom';

class Profile extends React.Component {

    componentDidMount(){
        this.props.fetchPostsForUser(this.props.currentUserId)
        // this.props.fetch
    }


    render(){
        console.log(this.props)
        // console.log("hello")
        // console.log(this.props.currentUserId)
        if (this.props.posts && this.props.posts.length > 0){
            const {posts} = this.props
            return(
                
                <div className='body-container'>
                <div className='post-body-container'>
                    <div className='post-headline-1'>
                        <div className="profile-name">{this.props.username}'s posts</div>
                        <ul className='posts-index'>
                        {
                            
                            posts.map(post => (
                                <PostIndexItem
                                deletePost = {this.props.deletePost}
                                currentUserId = {this.props.currentUserId}
                                key={post._id}
                                post={post}
                                />
                            ))
                            
                        }
                        </ul>

                    </div>
                    </div>
                </div>
            )}else{
                return(
                    <div className='body-container'>
                    <div className='post-body-container'>
                        <div className='post-headline-1'>
                    <div className="profile-name">{this.props.username}
                        <div className="no-post">No Posts</div>
                    </div>

                    </div>
                    </div>
                    </div>
                )
           
            }

    }
}
export default Profile;