import React,{useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(()=>{
        console.log('[cockpit.js] useEffect');
        // Http request
       const timer =  setTimeout(()=>{
            alert('Saved data to cloud!')
        }, 1000)
        return ()=>{
            clearTimeout(timer);
            console.log('[cockpit.js] cleanup Work in useEffect');

        }
    },[]) // just one, just initially
    // },[props.persons])


    useEffect(()=>{
        console.log('[cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[cockpit.js] cleanup Work in 2nd useEffect');


        }
    });
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            {/* <h1>Hi, I'm a React App</h1> */}
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button
                // alt={this.state.showPersons}
                className={btnClass}
                // onClick={this.togglePersonsHandler}>
                onClick={props.clicked}>
                Toggle Persons
                </button>
        </div>
    );
}

export default cockpit;
