import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")
// inset-x-0 
  return (
    <>
      <div className='flex w-full h-screen justify-center items-center'
      style={{backgroundColor: color}}>
      <h1 className='text-center font-bold text-white-500 font-serif text-5xl'>Jeonpa Lekso!</h1>
        <div className=' fixed flex flex-wrap justify-center bottom-5  px-2'> 
          
          <div className='flex flex-wrap gap-2 px-2 py-2 rounded-3xl bg-white'>

            <button onClick={()=>setColor("red")}  className='outline-none shadow-lg rounded-xl px-2 py-1  text-white' style={{backgroundColor: "red"}}>red</button>
            <button onClick={()=>setColor("green")}  className='outline-none shadow-lg rounded-xl px-2 py-1  text-white' style={{backgroundColor: "green"}}>green</button>
            <button onClick={()=>setColor("blue")} className='outline-none shadow-lg rounded-xl px-2 py-1  text-white' style={{backgroundColor: "blue"}}>blue</button>
            <button onClick={()=>setColor("violet")} className='outline-none shadow-lg rounded-xl px-2 py-1  text-white' style={{backgroundColor: "violet"}}>violet</button>
            <button onClick={()=>setColor("teal")} className='outline-none shadow-lg rounded-xl px-2 py-1  text-white' style={{backgroundColor: "teal"}}>teal</button>
            <button onClick={()=>setColor("orange")} className='outline-none shadow-lg rounded-xl px-2 py-1  text-white' style={{backgroundColor: "orange"}}>orange</button>

          </div>
        </div>
      </div>
   
    </>
  )
}

export default App
