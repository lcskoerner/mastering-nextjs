import React, { useState } from 'react'
import Header from '../components/header'

const List = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = useState(items)

  const filterItems = (e) => {
    const searchValue = e.target.value
    const currentItems = [...items]
    const matchingItems = currentItems.filter((item) => item.startsWith(searchValue))

    setFilteredItems(matchingItems)
  }

  return (
    <>
      <input onChange={filterItems} />
      <ul {...props}>
        {filteredItems.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

const ListContainer = () => {
  const items = ['Learn React', 'Learn Next.js', '???', 'Profit!']

  return (
    <>
      <Header />
      <List
        aria-label='My Fancy List'
        items={items}
      />
    </>
  )
}

export default ListContainer
