import React from 'react';

const Features = (props) => {
    return (
        <div>
            <div className="feature col ">
                <h3 className="fs-2">{props.item.title}</h3>
                <p>{props.item.description}</p>
                <a href="#" className="text-info">
                    Call to action
                </a>
            </div>
        </div>
    );
};

export default Features;