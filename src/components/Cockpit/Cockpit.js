import React from 'react';

import styles from './Cockpit.module.css';

const Cockpit = ( props ) => {

    let btnClass = null;
    if(props.showPersons){
        btnClass = styles.Red; //console.log('asasasa');
    }

    const assignedClasses = [];
    if (props.persons.length <= 2){
      assignedClasses.push( styles.red );
    }
    if (props.persons.length <= 1){
      assignedClasses.push( styles.bold );
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
                
            <p className={assignedClasses.join(' ')}>This works just perfectly!</p>
            
            <button className={btnClass} onClick={props.toggleName}> 
                Toggle Persons
            </button>
        </div>
    );
};

export default Cockpit; 