// Use the correct logical operator to complete the following component.


function App({isLoggedIn}) {
  return (
    <>
      <h1>My Application</h1>
      {isLoggedIn && <Profile /> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Add the attribute that allows React to keep track of elements in lists.


function GroceryList() {
  const items = [
    {id: 1, name: 'bread'},
    {id: 2, name: 'milk'},
    {id: 3, name: 'eggs'}
  ];

  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GroceryList />);

// Complete this statement to keep track of a "count" variable using the useState Hook.


import { useState } from "react";

function KeepCount() {
  const [count, setCount] = useState(0);
}


// What do you need to add to the second argument of a useEffect Hook to limit it to running only on the first render?


import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
  }, []);

  return <DisplayData data={data} />;
}

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// Add the following CSS styles inline to the <h1> element

// background-color = "yellow"


const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "yellow"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};
