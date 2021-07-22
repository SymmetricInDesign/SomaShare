import React from 'react';
import PostIndexItem from './post_index_item';
import {Link} from 'react-router-dom';

class Profile extends React.Component {

    componentDidMount(){
        // this.props.fetchPostsForUser(this.props.currentUser)
        // console.log(this.props.Id)
        this.props.fetchPostsForUser(this.props.userId)
    }


    render(){
        
        console.log(this.props)
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
                    <div className="profile-name">{this.props.username}</div>
                )
           
            }

    }
}
export default Profile;