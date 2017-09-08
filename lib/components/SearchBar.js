import React from 'react';
import debounce from 'lodash.debounce';
class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    };
    doSearch = debounce(() => {
       this.props.doSearch(this.state.searchTerm);
    }, 300)
    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value}, () => {
            this.doSearch();
        });
    }
    render() {
        return (
            <input
                type= "Search"
                placeholder="Enter Search Term"
                value={this.state.searchTerm}
                onChange={this.handleSearch}
            />
        );
    }
}
export default SearchBar;