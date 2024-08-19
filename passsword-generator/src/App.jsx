import { useState , useCallback } from 'react'
import './index.css'


function App() {
  let [length, setLength] = useState(8);
  let [num, setNum] = useState(false);
  let [char, setChar] = useState(false);
  let [pass, setPass] = useState("");

  const passwordgenerator = useCallback(()=>{ 
    let pas = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*(){}+_~"
  
    for (let i = a; i <= array.length; i++){
      let ch = (Math.random( ) * str.length + 1)
      pas = str.charAt(ch);
    }

    setPass(pas)

  }, [length ,num, char, setPass]);

 
  return (
    <>
<div className="flex justify-center align-middlew-full max-w-md mx-auto shadow-md rounded-lg  px-4 my-8 text-orange-500 bg-gray-500"> HII </div>
    </>
    
    
  )

}

export default App
