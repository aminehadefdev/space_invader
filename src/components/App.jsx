import { useSelector } from 'react-redux'

import useEventsKey from '../hooks/Canon/useEventsKey'
import useDirection from '../hooks/Canon/useDirection'
import useMoveWrapper from "../hooks/WraperShips/useMoveWrapper"
import useDataShip from '../hooks/Ship/useDataShip'
import useGameOver from '../hooks/GameOver/useGameOver'
import useMoveMissile from '../hooks/Missile/useMoveMissile'

import Canon from './Canon/Canon'
import WraperShips from './WraperShips/WraperShips'
import Missile from "./Missile/Missile"

import "./App.css"

function App() {
  const store = useSelector(state => state.App)
  useDataShip()
  useEventsKey()
  useDirection()
  useMoveWrapper()
  useGameOver()
  useMoveMissile()
  
  const style = {
    width: store.Area.width,
    height: store.Area.height
  }
  return (
    <div style={style} className="App">
      <WraperShips />
      <Canon />
      {
        store.Missile.missiles.map((item, index)=>{
          return (
            <Missile key={index} x={item.x} y={item.y} />
          )
        })
      }
    </div>
  );
}

export default App
