import React from 'react' // DefaultImport
import B from './B'
import { useState } from 'react' // NamedImport

export default function A() {
  // states A Component

  // this are hooks variables
  // const [x,setX] = useState(10)  // you can use both ways
  const [x,setX] = useState(['RFC','RCC'])

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <B name={x} />
    </React.Fragment>
  )
}
