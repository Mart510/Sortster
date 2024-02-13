// import block
import './App.css'
// component importrs
import SortVisualiser from './components/sortVisualiser'
//import StartResetButton from './components/startResetButton'
import SortControls from './components/sortControls'


function App() {

  return (
    <>
      <div className='mb-4'>
        <h1>Sortser</h1>
        <h3>Sorting Algorithm Visualizer</h3>
      </div>
        {/* sort controls */}
        <SortControls/>
        {/* <ColumnSetter/> */}
        {/* // sort visualiser */}
        <SortVisualiser/>
        {/* start button */}
        {/* <StartResetButton/> */}
    </>
  )
}
export default App