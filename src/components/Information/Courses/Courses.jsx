import React from 'react';

const Courses = (props) => {
    return (
        <div className="feature col ">
            <div>
                <h3 className="fs-2">{props.item.title}</h3>
                <p>{props.item.description}</p>
                <a href="#" className="text-info">
                    
                </a>
            </div>
        </div>
    );
};

export default Courses;