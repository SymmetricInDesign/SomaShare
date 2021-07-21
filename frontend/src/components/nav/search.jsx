import React from 'react'
import {CATEGORIES} from '../../util/categories'
import {Link} from "react-router-dom"
const queryString = require('query-string')



class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchText: "",
            category: "All"
        }
        this.updateCategory = this.updateCategory.bind(this)
        this.updateSearchText = this.updateSearchText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkForEnter = this.checkForEnter.bind(this)
    }

    updateCategory(e){
        this.setState({category: e.target.value})
    }
    updateSearchText(e){
        this.setState({searchText: e.target.value})
    }
    checkForEnter(e){
        if (e.charCode === 13){
            this.searchButton.click()
        }
    }
    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        const categoryOptions = CATEGORIES.map((category, idx)=>(
            <option key={idx} value={category}>{category[0].toUpperCase() + category.slice(1)}</option>
        ))
        categoryOptions.unshift(<option key={-10} value="All">All</option>)
        return(
            <div className="search">
                <div className="search-categories-container">
                    <select 
                        name="category" 
                        id="category-select" 
                        value={this.state.category}
                        onChange={this.updateCategory}
                        >
                        {categoryOptions}
                    </select>
                </div>
                <input type="text" onChange={this.updateSearchText} onKeyPress={this.checkForEnter}/>
                <Link to={{
                    pathname: '/products/search',
                    search: queryString.stringify(this.state)
                    }} 
                    className="search-icon-container" replace ref={node => this.searchButton = node}>
                    <i className="fas fa-search"></i>
                </Link>
            </div>
        )
    }
}

export default Search