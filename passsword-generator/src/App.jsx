import { useState , useCallback } from 'react'
import './index.css'


function App() {
  let [length, setLength] = useState(0);
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
    <h2 className='flex justify-center text-white '>
      PASSWORD GENERATOR...!
    </h2>
  
    <div className="flex justify-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
      <div className="w-full">
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-2 w-full">
          <input
            className='outline-none w-full py-2 px-3 my-4 rounded-md readOnly'
            placeholder='PASSWORD'
            type='text'
            value={pass}
          />
          <button className='outline-none bg-blue-400 text-lg text-white px-3 py-0.5 shrink-0 mt-4 h-10 rounded-md'>
            COPY
          </button>
        </div>
  
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
  
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={num}
              id='numberInput'
              onChange={() => setNum(prev => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
  
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type='checkbox'
              defaultChecked={char}
              id='characterInput'
              onChange={() => setChar(prev => !prev)}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )

}

export default App
