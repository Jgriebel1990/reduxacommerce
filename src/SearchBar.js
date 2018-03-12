import React from 'react';
import { connect } from 'react-redux';
import { searchActions } from './search';

const SearchBar = props => {
    return(
        <div>
            <input type="text" 
                    onChange={(e) => props.updateSearch(e.target.value)}
                    value={props.searchTerm}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchTerm: state.search
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateSearch: term => dispatch(searchActions.updateSearch(term))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);