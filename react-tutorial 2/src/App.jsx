import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

let myobj = {
  user: "ROHIT",
  age: 21
}

  return (
    <>
      <h1 className=" bg-green-400 text-3xl font-bold underline p-4 rounded-xl mb-6">
      Hello world!
     </h1>
    
    <Card channel="Rohit"  bntext="Visit Me"/>
    <Card channel="Rohan" bntext="Click Me" />


    </>
  )
}

export default App
