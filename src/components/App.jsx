import { useSelector } from 'react-redux'
import Canon from './Canon/Canon'
import useEventsKey from '../hooks/Canon/useEventsKey'
import useDirection from '../hooks/Canon/useDirection'
import useMoveWrapper from "../hooks/WraperShips/useMoveWrapper"

import WraperShips from './WraperShips/WraperShips'
import useDataShip from '../hooks/Ship/useDataShip'
import useGameOver from '../hooks/GameOver/useGameOver'

import "./App.css"

function App() {
  const store = useSelector(state => state.App)
  useDataShip()
  useEventsKey()
  useDirection()
  
  useMoveWrapper()
  useGameOver()
  
  const style = {
    width: store.Area.width,
    height: store.Area.height
  }
  return (
    <div style={style} className="App">
      <WraperShips />
      <Canon />
    </div>
  );
}

export default App
