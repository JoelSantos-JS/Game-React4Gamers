import { useState } from 'react'
import './App.css'
import { Board } from './components/Board'
import { game_size } from './settings/constants'




function App() {

  return (
      <div className='App' >

        <header className='App-header' style={{width: game_size , height: game_size }}>
        <Board/>
        </header>
          

      </div>

  )
}

export default App
