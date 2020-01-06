import React from 'react';
import styled from 'styled-components';

import classes from './Person.css';


const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //         color: 'lime'
    //     }
    // };
    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            < p onClick={props.click} > I'm {props.name} and I am {props.age} years old!</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;

