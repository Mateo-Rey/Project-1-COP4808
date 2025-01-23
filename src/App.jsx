import { useState } from 'react'
import "./index.css"
import GameCard from './components/GameCard'
import cs2 from "./assets/counter-strike-2.png"
function App() {
  return (
    <div className="min-h-screen">
      <h1 className='font-bold text-6xl text-black p-4'>FAU Game Night</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-center place-items-center bg-[#14B8A6] p-4'>
       
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        
      </div>
    </div>
  );
}

export default App
