import React from 'react'
import List from './List'

function Lists() {
  const items: string[] = ["tamim", "muktadir"]
  const onClick = (text: string):void => alert(text)

    return (
    <div><List onClick={onClick} items={items} /></div>
  )
}

export default Lists