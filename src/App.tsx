import { useState } from 'react'
import SideBar from './shared/SideBar'
import SearchBar from './shared/SearchBar'

function App() {

  return (
    <div 
      className="flex gap-4"
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
    >
      <SideBar />

      <div className="flex-col">
        <h1>Text</h1>
      </div>
    </div>
  )
}

export default App
