import React from 'react'
import { JsxAttribute } from 'typescript'

export default function ShoppingList(): JSX.Element {
  const items = [
    { id: 1, product: "Lemon", quantity: 3 },
    { id: 2, product: "Chicken", quantity: 2 },
  ];

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        <li>
          {items.map((item) => (
            <li key={item.id}>
              {item.product} - {item.quantity}
            </li>
          ))}
        </li>
      </ul>
    </div>
  )
}
