// sfc gen component (shorthand)
// name component the same as file

const DisplayEntries = (props) => {
    return (  
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
          {props.parentEntries.map((entry ,index) => {
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
    );
}
 
export default DisplayEntries;