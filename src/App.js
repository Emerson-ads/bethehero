import React, { useState} from 'react'


function App () {
    
    const [counter, setCounter] = useState(0)

  const increment = () => {
        setCounter(counter + 2)
  }
    
    return (
        <div>
            <h1>Hello World</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>+</button>

        </div>
    )
}

export default App