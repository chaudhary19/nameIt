import React from 'react';
import './Name.css';

const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain=";

const Name = ({ name }) => {
    return (
        <a className="card-link" href={`${nameCheapURL}${name}`} target="_blank" rel="noreferrer">
            <div className="Name">
                <p className="name">{name}</p>
            </div>
        </a>
    )
}

export default Name;