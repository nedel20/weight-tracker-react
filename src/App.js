import React, { useState } from 'react';


function App() {

  /**
   * State var responsible for holding entries of weight over time
   */

  //setEntries is function responsible for updating entries
  // set useState to initial value of function call 
  // collection of data , use an array therefore add an empty array 
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}]); 
  return (
    <div >
    <table>
      <thead>
        <tr>
          <th>Entry Number</th>
          <th>Weight</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {/* THis line of code is not dynamic enough, use map instead
         <tr>
          <td>1</td>
          <td>175</td>
          <td>11-23-2021</td>
        </tr> */}
        {entries.map((entry ,index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{entry.weight}</td>
              <td>{entry.date}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  
    </div>
  );
}

export default App;
