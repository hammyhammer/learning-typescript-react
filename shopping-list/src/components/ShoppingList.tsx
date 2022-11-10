import React from 'react'
import { JsxAttribute } from 'typescript'

// Having the interface here is okay. For larger applications
// It would be wiser to put it in another file for reusability
interface Item {
  id: number;
  product: string;
  quantity: number;
}
// We take the Item interface and put it in our ShoppingListProps
// interface and then use it as props
interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {


  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        <li>
          {props.items.map((item) => (
            <li key={item.id}>
              {item.product} - {item.quantity}
            </li>
          ))}
        </li>
      </ul>
    </div>
  )
}
