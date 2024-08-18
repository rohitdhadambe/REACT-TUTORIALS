import { useState } from 'react';

function App() {
  let [color, setColor] = useState("green");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
    <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 ">
 
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
      <button onClick={()=>setColor("green")} className="outline-none px-4 py-2 rounded-lg bg-green-700 text-white" >GREEN </button>
      <button onClick={()=>setColor("red")} className="outline-none px-4 py-2 rounded-lg bg-red-700 text-white" >RED </button>
      <button onClick={()=>setColor("blue")} className="outline-none px-4 py-2 rounded-lg bg-blue-700 text-white" >BLUE </button>
      <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-2 rounded-lg bg-yellow-400 text-white" >YELLOW </button>
      <button onClick={()=>setColor("orange")} className="outline-none px-4 py-2 rounded-lg bg-orange-400 text-white" >ORANGE </button>
      <button onClick={()=>setColor("pink")} className="outline-none px-4 py-2 rounded-lg bg-pink-700 text-white" >PINK </button>
      <button onClick={()=>setColor("purple")} className="outline-none px-4 py-2 rounded-lg bg-purple-500 text-white" >PURPLE </button>
      <button onClick={()=>setColor("teal")} className="outline-none px-4 py-2 rounded-lg bg-teal-800 text-white" >TEAL </button>
      <button onClick={()=>setColor("grey")} className="outline-none px-4 py-2 rounded-lg bg-gray-500 text-white" >GREY </button>  
      <button onClick={()=>setColor("black")} className="outline-none px-4 py-2 rounded-lg bg-black text-white" >BLACK </button>

    </div>
    
      <div className="flex  flex-wrap justify-center  gap-3 shadow-lg bg-white rounded-xl px-3 py-2 bottom-1">
      <button onClick={()=>setColor("white")} className="flex flex-wrap outline-none px-4 py-2 rounded-lg bg-white text-black" >WHITE </button>
      </div>
      
    </div>

    </div>
  );
}

export default App;
  