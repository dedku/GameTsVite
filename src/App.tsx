import { useState } from 'react'
const INITIAL_GAME_STATE = ["X", "O", "X", "", "", "", "", "", ""]

function App() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE)
  return (
    <div className='h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <h1 className='text-center text-5xl mb-4 font-display text-white'>Tic Tac Toe Game</h1>
      <div className="">
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">{INITIAL_GAME_STATE.map((player, index) => (
          <div key={index} className="h-36 border-solid border-4 border-skate-200 font-display text-7xl flex justify-center items-center cursor-pointer">{player}</div>
        ))}</div>
        <div className="text-white">Score Goes Here</div>
      </div>
    </div>
  )
}

export default App
