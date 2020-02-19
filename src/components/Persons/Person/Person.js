import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary.js';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

// const person = (props) => {
class Person extends Component {
   constructor(props){
      super(props);
      this.inputElementRef = React.createRef();
   }
   componentDidMount(){
      // this.inputElement.focus();
      this.inputElementRef.current.focus();
   }
   render() {
      console.log('[person.js] rendering...');
      return (<Aux>
         <AuthContext.Consumer>
            {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
         </AuthContext.Consumer>
        
         < p key="I1" onClick={this.props.click} >
            I'm {this.props.name} and I am {this.props.age} years old!
         </p>
         < p key="I2" > {this.props.children}</p >
         <input 
         key="I3" 
         // ref={(inputEl) => {this.inputElement = inputEl}}
         ref={this.inputElementRef}
         type="text" 
         onChange={this.props.changed} 
         value={this.props.name} />
      </Aux>);
   }
};

Person.propTypes = {

   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   changed: PropTypes.func
}

// export default withClass(Person);
export default withClass(Person, classes.Person);

