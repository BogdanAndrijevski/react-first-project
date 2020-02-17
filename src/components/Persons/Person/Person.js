import React ,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary.js';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

// const person = (props) => {
class Person extends Component {
    render(){
    console.log('[person.js] rendering...');
    return (<Aux>
         {/* <div className={classes.Person}> */}
            < p key="I1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
            < p key="I2" > {this.props.children}</p >
            <input key="I3" type="text" onChange={this.props.changed} value={this.props.name} />
         {/* </div> */}
        </Aux>);
}};


// export default withClass(Person);
export default withClass(Person, classes.Person);

