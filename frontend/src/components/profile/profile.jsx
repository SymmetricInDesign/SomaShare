import React from 'react';
import PostIndexItem from './post_index_item';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    // constructor(props){
    //     super(props)
        
    // }

    componentDidMount(){
        this.props.fetchPostsForUser(this.props.currentUser)
    }
    // getLinks(){
    //     if (this.props.loggedIn){
    //         return(
    //             <div>
    //                 <Link to={'/profile'}>Profile</Link>
    //             </div>

    //         )
    //     }else{
    //         return(
    //             <h1>Log in /Sign in</h1>
    //         )
    //     }
    // }

    render(){
        console.log(this.props)
        if (this.props.posts && this.props.posts.length > 0){
            const {posts} = this.props
            return(
                
                <div className='body-container'>
                <div className='post-body-container'>
                    <div className='post-headline-1'>
                        <h1>{this.props.username}</h1>
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
                    <h1>{this.props.username}</h1>
                )
           
            }

    }
}
export default Profile;