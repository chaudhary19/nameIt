import React from 'react';
import './Header.css';
import classNames from 'classnames';

const Header = ({ headerText, searchBoxText }) => {

    var imgClasses = classNames({
        'Header-img': true,
        'Header-image-expanded': searchBoxText.length === 0,
        'Header-image-contracted': searchBoxText.length > 0
    });

    var textClasses = classNames({
        'Header-text': true,
        'Header-text-expanded': searchBoxText.length === 0,
        'Header-text-contracted': searchBoxText.length > 0
    })

    return (
        <div className="Header-component">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={imgClasses}
                alt="Logo"
            />
            <div className={textClasses}>{headerText}</div>
        </div>
    )
}

export default Header;