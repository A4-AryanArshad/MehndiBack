import React from 'react'
import styles from '../../styles/LandReg.module.css';
const LandRegistration = () => {
  return (
   <>
   <div id={styles.outerpage}>
   <div id={styles.page}>
   <div id={styles.head}>
    <img src="./houselogo.jpeg"></img>
   <h2>REGISTRATION FORM - Land Purchase</h2>
   </div>
   <div id={styles.pdetails}>
<h3>PERSONAL DETAILS</h3>
<div id={styles.fields}>
    <h4>Name :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>Address :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>Phone :</h4>
    <input type="number" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>Email :</h4>
    <input type="email" id={styles.dotted}></input>
    
</div>
   </div>
  
   <div id={styles.pdetails}>
<h3>LAND DETAILS</h3>
<div id={styles.control}>
  <div id={styles.icontrol1}> 
  <label class="radio">
    <input type="radio" name="foobar"/>
   GTAED ENCLAVES
  </label>
  </div>
  <div id={styles.icontrol2}>
  <label class="radio">
    <input type="radio" name="foobar" />
  OPEN COMMUNITY
  </label>
  </div>
</div>
<div id={styles.fields}>
    <h4>PLOT NUMBER :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>PAYMENT OPTION :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>FORMAT FOR DOCUMENTS :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
   </div>

   <div id={styles.pdetails}>
<h3>LAND USE AND DEVELOPMENT</h3>
<div id={styles.control}>
  <div id={styles.icontrol1}> 
  <label class="radio">
    <input type="radio" name="foobar"/>
   COMMERCIAL
  </label>
  </div>
  <div id={styles.icontrol2}>
  <label class="radio">
    <input type="radio" name="foobar" />
  RESIDENTIAL
  </label>
  </div>
</div>
<div id={styles.fields}>
    <h4>TIME AND PLANNED DEVELOPMENT :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>

   </div>
   <div id={styles.pdetails}>
<h3>NEXT OF KIN</h3>
<div id={styles.fields}>
    <h4>Name :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>Address :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>Phone :</h4>
    <input type="number" id={styles.dotted}></input>
    
</div>
<div id={styles.fields}>
    <h4>Email :</h4>
    <input type="email" id={styles.dotted}></input>
    
</div>

   </div>
 
   <div id={styles.pdetails}>
<h3>FOR OFFCE USE ONLY</h3>
<div id={styles.fields1}>
<div id={styles.fields2}>
    <h4>Date :</h4>
    <input type="number" id={styles.dotted}></input>
    
</div>

<div id={styles.fields}>
    <h4>Client Servise Personal :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>
</div>
<div id={styles.fields}>
    <h4>Remarks :</h4>
    <input type="text" id={styles.dotted}></input>
    
</div>


   </div>
   </div>
   </div>
   </>
  )
}

export default LandRegistration;
