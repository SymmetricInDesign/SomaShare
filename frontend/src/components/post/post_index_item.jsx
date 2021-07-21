import React from 'react'
class PostIndexItem extends React.Component{

    constructor(props){
        super(props);
        this.getDate= this.getDate.bind(this);
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
                <p className='post-month'>{monthHead[month]}</p> <p className='friend-bill-day'>{day}</p>
            </div>
        )
    }  

    render(){
        return(
            <div className="post-details">

                <a href={this.props.post.link} target="_blank" >
                {this.props.post.title}
                </a>
                <h2> {this.props.post.description}</h2>
        
                <p>{this.props.post.createdAt}</p>
            </div>
        )
    }
}

export default PostIndexItem