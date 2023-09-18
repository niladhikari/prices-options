

import './App.css'
import BarCart from './Conponents/BarChart/BarCart'
import LineChart from './Conponents/LineChart/LineChart'
import Navbar from './Conponents/Navbar/Navbar'
import Phones from './Conponents/Phones/Phones'
import PriceOptions from './Conponents/PriceOptions/PriceOptions'
// import DaisyNav from './Conponents/DaisyNav/DaisyNav'

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      {/* <h1>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarCart></BarCart>
      <Phones></Phones>
    </>
  )
}

export default App
