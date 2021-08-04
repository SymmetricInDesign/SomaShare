import React from 'react'
import {CATEGORIES} from '../../util/categories'
import {Link} from "react-router-dom"
import Select from 'react-select'

const queryString = require('query-string')



class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchText: "",
            category: "All"
        }
        this.category = "All"
        this.updateCategory = this.updateCategory.bind(this)
        this.updateSearchText = this.updateSearchText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkForEnter = this.checkForEnter.bind(this)
    }

    updateCategory(selectedOption){
        this.setState({ category: selectedOption.value });
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
            { value: category, label: category }
        ))
        categoryOptions.unshift({value: "All", label: "All"})
        return(
            <div className="search">
                <div className="search-categories-container">
                    <Select 
                    isSearchable={false}
                    classNamePrefix="react-select" 
                    className="react-select-container" 
                    options={categoryOptions} 
                    value={{value: this.state.category, label: this.state.category}}
                    onChange={this.updateCategory}/>
                </div>
                <input type="text" onChange={this.updateSearchText} onKeyPress={this.checkForEnter}/>
                <Link to={{
                    pathname: '/posts/search',
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