import React, { useEffect, useState } from 'react'

function GameCard(props) {
  return (
    <div className='flex flex-col text-black space-y-2 w-[200px] lg:w-[300px] bg-[#a1fae7] m-2 p-4'>
        <img src={props.image} />
        <h2 className='font-bold text-3xl'>{props.name}</h2>
        <h3 className='font-bold'>{props.genre}</h3>
        <a href={props.url} target='_blank' className='bg-white p-2 w-36 rounded-xl self-center'>View Game</a>
    </div>
  )
}

export default GameCard