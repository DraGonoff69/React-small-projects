import React from 'react'
import Card from '../components/Card'

const Props = () => {
  return (
    <div>
    <h2 className="bg-green-400 text-black p-4 rounded-xl mb-4">Hello</h2>
    <Card username='Hi Ayush' btnText='Jai Shree Ram' myArr={{name:"Ayush",age:"15"}}/>
    </div>
  )
}

export default Props
