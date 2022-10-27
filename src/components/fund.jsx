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