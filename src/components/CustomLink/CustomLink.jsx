import React from 'react';
import {NavLink, useMatch} from "react-router-dom";
import classes from "./CustomLink.module.css";

const CustomLink = ({children, to}) => {
    const match = useMatch(to)
    return (
        <span className={classes.links}>
            <NavLink to={to}
                     className={ classes.CustomLinks}
                     style={{
                         color: match ? 'white' : 'black'
                     }}>
                {children}
            </NavLink>
        </span>

    );
};

export default CustomLink;