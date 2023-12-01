import React from 'react';

const Links = (props) => {
    return (
        <div>
            <li className="nav-item ">
                <a className="nav-link ${props.item.active ? 'active' : ''} text-white"active={props.item.active} aria-current="page" href={props.item.link}>
                    {props.item.name}
                </a>
            </li>
        </div>
    );
};

export default Links;