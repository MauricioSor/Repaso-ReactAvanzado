import React from 'react';

const Links = (props) => {
    return (
        <div>
            <li className="nav-item ">
                <a className="nav-link  text-white" aria-current="page" href={props.item.link}>
                    {props.item.name}
                </a>
            </li>
        </div>
    );
};

export default Links;