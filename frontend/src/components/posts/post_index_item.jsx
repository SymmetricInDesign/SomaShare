import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';

class PostIndexItem extends React.Component{

    constructor(props){
        super(props);
        this.showFlag = false;
        this.getDate= this.getDate.bind(this);

    }

    deletePostAndRedirect(){
        this.props.deletePost(this.props.post._id)
        this.props.history.push("/")
    }

    getDate() {
        const { post } = this.props

        const monthHead = {
            "01": "JAN",
            "02": "FEB",
            "03": "MAR",
            "04": "APR",
            "05": "MAY",
            "06": "JUN",
            '07': "JUL",
            "08": "AUG",
            "09": "SEP",
            "10": "OCT",
            '11': "NOV",
            "12": "DEC"
        }

        let date = post.createdAt
        let month = date.slice(5, 7)
        let day = date.slice(8, 10)

        return (
            <div className='post-date'>
                <p className='post-month'>{monthHead[month]}</p> <p className='post-day'>{day}</p>
            </div>
        )
    }  

    render(){
        const {post, currentUserId} = this.props
        if (!post) return null;
        currentUserId === post.user ? this.showFlag=true : this.showFlag=false;

        return(
            <li>
                <div className="post-details">
                    <div className='post-index-item'>
                        <div className='post-left'>
                            {this.getDate()} 
                            <div className='post-date'>
                                <p className='post-index-rating'>{post.rating > 0 ? "+" : null}{post.rating}</p>
                            </div>
                        </div>
                        <div className='post-right'>
                            <Link className='post-right-1'to={`/posts/${post._id}`}>{post.title}</Link>
                            <p className='post-right-2'>{this.props.post.description}</p>
                        </div>   
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(PostIndexItem)