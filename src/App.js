import React from 'react'
import './App.css'
import { useState } from 'react'


const App = () => {
  const [items, setItems] = useState([])

  const onRemoveItem = (itemToRemove) => {
      const newItems = items.filter((item) => item !== itemToRemove)
      setItems(newItems)
  }

  const onSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      const input = form.item
      const newItems = [...items, input.value]
      setItems(newItems)
      form.reset()
  }

  return (
    <div className='bg'>
      <h1>Shopping List</h1>
      <div className='container'>
        <h2>Items To Buy</h2>
        <form onSubmit={onSubmit}>
          <input 
            type='text'
            name='item'
            placeholder='Add a new item'
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} item={item} key={item + index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

const Item = ({item, onRemoveItem}) => {
  return(
    <li>
      {item}
      <button className='delete' onClick={() => onRemoveItem(item)}>
        X
      </button>
    </li>
  )
}

export default App