import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  /**
   * State var responsible for holding entries of weight over time
   */

  //setEntries is function responsible for updating entries
  // set useState to initial value of function call 
  // collection of data , use an array therefore add an empty array 

  // instantiated component by <DisplayEntries/>

  // Props allow you to pass data to components

  // Anytime you want JS you have to use {} in html
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}]); 
  return (
    <div >
      
      <DisplayEntries parentEntries={entries}/>
      <AddEntryForm/>
  
    </div>
  );
}

export default App;
