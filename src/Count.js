import React from 'react'

export const Count = ({count,incrementHandler,decrementHandler,resetHandler}) => {
  return (
   <>
      <div>Count : {count}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
    </>
  )
}
