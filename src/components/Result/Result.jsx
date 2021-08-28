import React from 'react';
import './Result.css';
import Name from '../Name/Name';

const Result = ({ result }) => {

    const showresult = result.map((res) => {
        return (
            <Name key={res} name={res} />
        )
    })

    return (
        <div className="result-container">
            {showresult}
        </div>
    )
}

export default Result;