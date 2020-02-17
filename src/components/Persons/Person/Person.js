import React, { Component, Fragment } from 'react';
import Aux from '../../../hoc/Auxiliary.js';
import classes from './Person.css';


// const person = (props) => {
class Person extends Component {
   render() {
      console.log('[person.js] rendering...');
      return (
         <Fragment>
            <div className={classes.Person}>
               < p key="I1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
               < p key="I2" > {this.props.children}</p >
               <input key="I3" type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
         </Fragment>
      );
   }
};


export default Person;

