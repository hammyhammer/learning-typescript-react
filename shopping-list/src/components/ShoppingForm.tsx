import React, { useRef } from 'react'

// useRef is another way to be able to update a state. 

interface ShoppingFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingForm({ onAddItem }: ShoppingFormProps): JSX.Element {

  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    let newProduct = productInputRef.current!.value
    let quantity = parseInt(quantityInputRef.current!.value)

    onAddItem(newProduct, quantity)
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";


  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Product Name' ref={productInputRef} />
      <input type="number" min={0} placeholder="How many" ref={quantityInputRef} />
      <button type='submit'>Add Item</button>

    </form>
  )
}
