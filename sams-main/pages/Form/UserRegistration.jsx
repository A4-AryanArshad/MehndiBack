import React from 'react'
import styles from '../../styles/UserReg.module.css';

const UserRegistration = () => {
  return (
    <>
    <div id={styles.outerpage}>
       <div id={styles.page}>
       <div id={styles.head}>
        <img src="./houselogo.jpeg"></img>
       <h2>Client Information Sheet</h2>
       </div>
       <div id={styles.pdetails}>
    <h3>PERSONAL DETAILS</h3>
    <div id={styles.fields}>
        <h4>File Number :</h4>
        <input type="text" id={styles.dotted}></input>
        
    </div>
    <div id={styles.fields}>
        <h4>Client Source:</h4>
        <input type="text" id={styles.dotted}></input>
        
    </div>
    <div id={styles.fields}>
        <h4>Agreed Upon Fee :</h4>
        <input type="text" id={styles.dotted}></input>
        
    </div>
    <div id={styles.fields}>
        <h4>Client Name :</h4>
        <input type="text" id={styles.dotted}></input>
        
    </div>
    <div id={styles.fields}>
        <h4>Last Name :</h4>
        <input type="text" id={styles.dotted}></input>
        
    </div>
    <div id={styles.fields}>
        <h4>Client Email address :</h4>
        <input type="email" id={styles.dotted}></input>
        
    </div>
       </div>
       <div id={styles.fields}>
        <h4>Client Phone Number :</h4>
        <input type="number" id={styles.dotted}></input>
        
    </div>
       
    </div>
    </div>
    
    
    </>
  )
}

export default UserRegistration