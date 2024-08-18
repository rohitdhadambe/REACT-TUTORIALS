import { useState } from 'react';
import Chai from './chai';

function App() {
  // Use state hooks for `count`
  let [count, setcount] = useState(0); // Initialize with 0

  // Function to increment the count
  let addvalue = () => {
    if (count < 50) { // Check if count is less than 5
      // Use the setter function to update the state
      setcount(count+1); 
      setcount(count+1);
      setcount(count+1); // here the counter value will no directly increase by 3 times but below

      setcount(precount => precount + 1); 
      setcount(precount => precount + 1);
      setcount(precount => precount + 1); //here the counter value will  directly increase by 3 times
// because here fibre take a bunch of code and execute , and when it take count +1 it think that work is same 3 times ie=line no 12,13,14 so counter is updated only once
// but in case of line no 16 ,17, 18 we write it int way of arrow function so it take one time one fun and execute it 
//  and in that arrow fun it takes a special parameter ie=previous counter value which keep the track of every value and hence here the counter increases 3times directly
      console.log("value added", count + 1); // Log the updated value
    }
  };

  // Function to decrement the count
  let remvalue = () => {
    if (count > 0) { // Check if count is greater than 0
      setcount(count - 1); // Use the setter function to update the state
      console.log("value subtracted", count - 1); // Log the updated value
    }
  };

  return (
    <>      
      <Chai />
      <p>hiii</p>

      <h1>Counter value: {count}</h1>
      <button onClick={addvalue}>COUNTER++ {count}</button>
      <br />
      <br />
      <button onClick={remvalue}>COUNTER-- {count}</button>
      <p>{count}</p>
    </>
  );
}

export default App;
