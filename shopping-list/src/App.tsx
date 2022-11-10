import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from "./models/item";
import ShoppingForm from './components/ShoppingForm';

function App() {
  const [items, setItems] = useState<Item[]>([])

  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken", quantity: 2 },
  // ];
  return (
    <div>
      {/* <Greeter person="Bobby" /> */}
      <ShoppingList items={items} />
      <ShoppingForm />
    </div>
  );
}

export default App;
