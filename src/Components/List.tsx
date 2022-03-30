import React from 'react'

function List({items, onClick}: {
    items: string[],
    onClick: (text: string) => void;
}) {
  return (
    <div>{
        items.map((item, index) => (
            <li key={index} onClick={() => onClick(item)}>{item}</li>
        ))
        }</div>
  )
}

export default List