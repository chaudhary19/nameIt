import React from 'react';
import './SearchBox.css';

const SearchBox = ({ handleInputChange }) => {
    return (
        <div className="SearchBox-container">
            <input
                onChange={(event) => { handleInputChange(event.target.value) }}
                type="text"
                className="searchbox"
                placeholder="Type Keywords..." />
        </div>
    )
}

export default SearchBox;