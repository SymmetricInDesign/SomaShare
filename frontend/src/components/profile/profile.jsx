import React from 'react';
import PostIndexItem from './profile_index_item';
import {Link} from 'react-router-dom';
import * as UserUtil from '../../util/user_api_util'

class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {user: ""}
    }

    componentDidMount(){
        this.props.fetchPostsForUser(this.props.userId)
        UserUtil.fetchUser(this.props.userId).then(res=>{
            this.setState({user: res.data.username})
        });
    }

    render(){
        const {userId, posts} = this.props
        
        if (this.props.posts && this.props.posts.length > 0){
            return(
                
                <div className='body-container'>
                <div className='post-body-container'>
                    <div className='post-headline-1'>
                        <div className="profile-name">{this.state.user}'s Posts</div>
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
                                <div className="profile-name">{this.state.user}'s Posts
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
