import React from 'react'
import {CATEGORIES} from '../../util/categories'
import {Link} from "react-router-dom"
import $ from 'jquery'
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
    componentDidMount(){

    }
    componentDidUpdate(){
        // console.log($('#category-select').val())
        // this.category = $('#category-select').val()
    }

    updateCategory(selectedOption){
        console.log(selectedOption)
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
        // const categoryOptions = CATEGORIES.map((category, idx)=>(
        //     <option onClick={this.updateCategory} key={idx} value={category}>{category[0].toUpperCase() + category.slice(1)}</option>
        // ))
        const categoryOptions = CATEGORIES.map((category, idx)=>(
            { value: category, label: category }
        ))
        // categoryOptions.unshift(<option key={-10} value="All">All</option>)
        categoryOptions.unshift({value: "All", label: "All"})
        return(
            <div className="search">
                {/* <Select2
                    defaultValue={2} // or as string | array
                    data={CATEGORIES}
                    onChange = {this.updateCategory}
                    options={{
                        placeholder: 'search by tags',
                    }}
                /> */}
                <div className="search-categories-container">
                    <Select 
                    isSearchable={false}
                    classNamePrefix="react-select" 
                    className="react-select-container" 
                    options={categoryOptions} 
                    // defaultValue={categoryOptions[0]}
                    value={{value: this.state.category, label: this.state.category}}
                    // getOptionValue={option => option['id']}
                    onChange={this.updateCategory}/>
                    {/* <select 
                        name="category" 
                        id="category-select" 
                        value={this.state.category}
                        onChange={this.updateCategory}
                        >
                        {categoryOptions}
                    </select> */}
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