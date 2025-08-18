import { useSelector } from 'react-redux'
import Canon from './Canon/Canon'
import useEventsKey from '../hooks/Canon/useEventsKey'
import useDirection from '../hooks/Canon/useDirection'
import useMoveWrapper from "../hooks/WraperShips/useMoveWrapper"

import "./App.css"
import WraperShips from './WraperShips/WraperShips'
import useDataShip from '../hooks/Ship/useDataShip'

function App() {
  const store = useSelector(state => state.App)
  useDataShip()
  useEventsKey()
  useDirection()
  useMoveWrapper()

  console.log(store.WraperShips.vertualData.vertualDataShip[0])
  
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
