import { useState } from 'react'
import "./index.css"
import GameCard from './components/GameCard'
import cs2 from "./assets/counter-strike-2.png"
import tf2 from "./assets/tf2.jpg"
import r6 from "./assets/r6.jpg"
import rivals from "./assets/rivals.jpg"
import ow2 from "./assets/ow2.jpg"
import tekken from "./assets/tekken.jpg"
import smash from "./assets/smash.jpg"
import roblox from "./assets/roblox.jpg"
import mario from "./assets/mario.jpg"
import minecraft from "./assets/minecraft.jpg"
function App() {
  return (
    <div className="min-h-screen">
      <h1 className='font-bold text-6xl text-black p-4'>FAU Game Night</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-center place-items-center bg-[#14B8A6] p-4'>
       
        <GameCard image={cs2} name={"Counter-Strike 2"} genre={"FPS"} url={"https://www.counter-strike.net/cs2"}/>
        <GameCard image={tf2} name={"Team Fortress 2"} genre={"FPS"} url={"https://store.steampowered.com/app/440/Team_Fortress_2/"}/>
        <GameCard image={r6} name={"Rainbow Six Siege"} genre={"FPS"} url={"https://www.ubisoft.com/en-us/game/rainbow-six/siege"}/>
        <GameCard image={rivals} name={"Marvel Rivals"} genre={"3rd Person Team Shooter"} url={"https://www.marvelrivals.com/"}/>
        <GameCard image={ow2} name={"Overwatch 2"} genre={"Team Shooter"} url={"https://overwatch.blizzard.com/en-us/"}/>
        <GameCard image={tekken} name={"Tekken 8"} genre={"Fighting"} url={"https://store.steampowered.com/app/1778820/TEKKEN_8/"}/>
        <GameCard image={smash} name={"Super Smash Bros Ultimate"} genre={"Platform Fighting"} url={"https://www.smashbros.com/en_US/"}/>
        <GameCard image={roblox} name={"Roblox"} genre={"Variety"} url={"https://www.roblox.com"}/>
        <GameCard image={minecraft} name={"Minecraft"} genre={"Survival/Variety"} url={"https://www.minecraft.net"}/>
        <GameCard image={mario} name={"Mario Party Superstars"} genre={"Party Games"} url={"https://www.nintendo.com/us/store/products/mario-party-superstars-switch/"}/>

      
        
      </div>
    </div>
  );
}

export default App
