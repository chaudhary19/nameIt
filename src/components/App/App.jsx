import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Result from '../Result/Result';

// State is a peice of data that you might save because it might change in future!!

const name = require('@rstacruz/startup-name-generator');

const App = () => {

    const [headerText, setHeaderText] = useState("Name It!!");
    const [searchBoxText, setSearchBoxText] = useState("");
    const [result, setResult] = useState([]);


    const handleInputChange = (inputText) => {
        if (inputText.length > 0) {
            setResult(name(inputText));
        }
        else {
            setResult([]);
        }
        setSearchBoxText(inputText);
    }

    return (
        <div className="App">
            <Header headerText={headerText} searchBoxText={searchBoxText} />
            <SearchBox handleInputChange={handleInputChange} />
            <Result result={result} />
        </div>
    )
}

export default App;