import React,{useState} from 'react'

const Passwordgenerator = () => {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(flase)
  const [symAllowed, setSymAllowed] = useState(flase)
  const [password,setPassword] = useState('')
  return (
    <>
    
        <div className="text-4xl text-center bg-black text-white w-full h-screen ">Password generator</div>

    </>
  )
}

export default Passwordgenerator
