import React,{useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    
    const addValue = () => {
        setCount(count+1)
        // setCount(prevCount => prevCount+1)
        // setCount(prevCount => prevCount+1)
        // setCount(prevCount => prevCount+1)

    }

    const subValue = () => {
        setCount(count-1)
    }
  return (
    <div>
    <h1>Hello world</h1>
    <div className="flex flex-row justify-center">

    <button className='bg-black p-2 text-white rounded-xl mx-5' onClick={addValue}> Say Hi: {count}</button>
    <button className='bg-black p-2 text-red-800 rounded-xl' onClick={subValue}> Say By: {count}</button>
    </div>
    
    </div>
  )
}

export default Counter
