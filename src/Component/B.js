import React from 'react'
import C from './C'

function B({name}) {
  return (
    <>
      <h1>Hello Again {name}</h1>
      <C name={name} />
    </>
  )
}

export default B;
