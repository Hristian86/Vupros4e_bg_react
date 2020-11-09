import React from 'react';
import './Alert.css';

// Alert for user or guest navigation through the site
const AlertProductComponent = ({ vote, message }) => {

    return <div className="">

        <div className="">
            
            <small></small>
            {/*<img className="alert__image" src={image} />*/}
            <h6 className="text-success">{message}</h6>
        </div>

    </div>
}

export default AlertProductComponent;