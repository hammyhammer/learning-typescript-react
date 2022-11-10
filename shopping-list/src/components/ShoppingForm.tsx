import React, { useRef } from 'react'

// useRef is another way to be able to update a state. 

interface ShoppingFormProps {
  onAddItem: (item: string) => void;
}

export default function ShoppingForm({ onAddItem }: ShoppingFormProps): JSX.Element {

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    let newProduct = inputRef.current!.value
    onAddItem(newProduct)
    inputRef.current!.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Product Name' ref={inputRef} />
      <button type='submit'>Add Item</button>
    </form>
  )
}
