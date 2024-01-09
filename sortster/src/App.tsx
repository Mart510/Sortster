// import block
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SortVisualiser from './sortVisualiser'

function App() {

  return (
    <>
    <div className='mb-4'>
      <h1>Sortser</h1>
      <h3>Sorting Algorithm Visualizer</h3>
    </div>
      {/* sort controls */}
      {/* <ColumnSetter/> */}
      {/* // sort visualiser */}
      <SortVisualiser/>
    </>
  )
}
export default App