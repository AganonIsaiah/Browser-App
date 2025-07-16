import { useState } from 'react'
import Sidebar from './shared/Sidebar'

function App() {

  return (
    <div
      className="flex gap-4"
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
    >
      <Sidebar />
    </div>
  )
}

export default App
